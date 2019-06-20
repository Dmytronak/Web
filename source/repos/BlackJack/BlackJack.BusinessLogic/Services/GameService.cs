using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Helpers.Interfaces;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using BlackJack.DataAccess.Repositories.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Identity;

namespace BlackJack.BusinessLogic.Services
{
    public class GameService : IGameService
    {
        private readonly UserManager<User> _userManager;
        private readonly IGameRepository _gameRepository;
        private readonly IPlayerRepository _playerRepository;
        private readonly IBotRepository _botRepository;
        private readonly IPlayerStepRepository _playerStepRepository;
        private readonly IBotStepRepository _botStepRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IBotInGameRepository _botInGameRepository;
        private readonly IPlayerInGameRepository _playerInGameRepository;
        private readonly ICardHelper _cardHelper;

        public GameService(UserManager<User> userManager, ICardHelper cardHelper, IGameRepository gameRepository, IPlayerRepository playerRepository, IBotRepository botRepository, IPlayerStepRepository playerStepRepository,
            IBotStepRepository botStepRepository, ICardRepository cardRepository, IPlayerInGameRepository playerInGameRepository, IBotInGameRepository botInGameRepository)
        {
            _userManager = userManager;
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _botRepository = botRepository;
            _playerStepRepository = playerStepRepository;
            _botStepRepository = botStepRepository;
            _cardRepository = cardRepository;
            _botInGameRepository = botInGameRepository;
            _playerInGameRepository = playerInGameRepository;
            _cardHelper = cardHelper;
        }
        public async Task<GetPlayGameView> GetActive(string userId)
        {
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist! Play new game.");
            }
            var activeGame = activeGameOfUser.Game;
            var playerStep = await _playerStepRepository.GetByGameId(activeGame.Id);
            var boSteps = await _botStepRepository.GetByGameId(activeGame.Id);
            var playerInGame = await _playerInGameRepository.GetByGameId(activeGame.Id);
            var botList = boSteps
               .Select(x => x.Bot)
               .Distinct()
               .ToList();
            var groupedBotSteps = boSteps.GroupBy(x => x.BotId);
            var botPlayGameViewItems = new List<BotGetPlayGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var currentBotName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                if (currentBotName == null)
                {
                    throw new CustomServiceException("Bot is doesn`t exist");
                }
                var botPlayGameViewItem = new BotGetPlayGameViewItem()
                {
                    Name = currentBotName,
                    Cards = item.Select(cardPlayGameViewItem => new CardGetPlayGameViewItem()
                    {
                        Rank = cardPlayGameViewItem.Rank,
                        Suit = cardPlayGameViewItem.Suit
                    })
                .ToList()
                };
                botPlayGameViewItems.Add(botPlayGameViewItem);
            }
            var response = new GetPlayGameView()
            {
                NumberOfBots = activeGame.NumberOfBots,
                Status = activeGame.Status,
                Winner = activeGame.Winner,
                Player = new PlayerGetPlayGameView()
                {
                    Name = playerInGame
                    .Select(x => x.Player.Name)
                    .FirstOrDefault(),
                    Cards = playerStep
                    .Select(cardPlayGameViewItem => new CardGetPlayGameViewItem()
                    {
                        Rank = cardPlayGameViewItem.Rank,
                        Suit = cardPlayGameViewItem.Suit
                    })
                .ToList()
                },
                Bots = botPlayGameViewItems
            };
            return response;
        }
        public async Task<GetPlayGameView> GetPlay(int numberOfBots, string userId)
        {
            if (numberOfBots <= 0)
            {
                throw new CustomServiceException("NumberOfBots is 0!");
            }
            var player = await _playerRepository.GetByUserId(userId);
            var shuffledDeck = await _cardHelper.Shuffle();
            var winner = "No one";
            var bots = await _botRepository.GetAll();
            if (bots.Count == 0)
            {
                throw new CustomServiceException("Bots doesn`t exist. Add bots on Data base!");
            }
            var botList = bots
                .OrderBy(x => Guid.NewGuid())
                .Take(numberOfBots)
                .ToList();
            var game = new Game()
            {
                NumberOfBots = numberOfBots,
                Status = StatusType.New,
                Winner = winner
            };
            var gameId = game.Id;
            var deck = shuffledDeck
                .Select(x => new Card()
                {
                    GameId = gameId,
                    Rank = x.Rank,
                    Suit = x.Suit,
                })
                .ToList();
            var playerCard = GetPlayerCard(deck);
            var playerStep = new PlayerStep()
            {
                Rank = playerCard.Rank,
                Suit = playerCard.Suit,
                GameId = game.Id
            };
            var botsCards = GetCardsOfBots(botList, deck);
            var botsSteps = GetBotSteps(botList, botsCards, gameId);
            var playerInGame = new PlayerInGame()
            {
                PlayerId = player.Id,
                GameId = game.Id,
                Score = GetCardValue(playerCard.Rank)
            };
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = game.Id,
                    BotId = x.BotId,
                    Score = GetCardValue(x.Rank)
                })
                .ToList();

            var cardPlayGameViewItems = new List<CardGetPlayGameViewItem>();
            cardPlayGameViewItems.Add(new CardGetPlayGameViewItem()
            {
                Rank = playerStep.Rank,
                Suit = playerStep.Suit
            });
            var groupedBotsSteps = botsSteps.GroupBy(x => x.BotId);
            var botPlayGameViewItems = new List<BotGetPlayGameViewItem>();
            foreach (var item in groupedBotsSteps)
            {
                var currentBotName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                var botPlayGameViewItem = new BotGetPlayGameViewItem()
                {
                    Name = currentBotName,
                    Cards = item
                    .Select(cardPlayGameViewItem => new CardGetPlayGameViewItem()
                    {
                        Rank = cardPlayGameViewItem.Rank,
                        Suit = cardPlayGameViewItem.Suit
                    })
                    .ToList()
                };
                botPlayGameViewItems.Add(botPlayGameViewItem);
            }
            var response = new GetPlayGameView()
            {
                NumberOfBots = numberOfBots,
                Status = StatusType.New,
                Winner = winner,
                Player = new PlayerGetPlayGameView()
                {
                    Name = player.Name,
                    Cards = cardPlayGameViewItems
                },
                Bots = botPlayGameViewItems
            };

            await _gameRepository.Create(game);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _playerInGameRepository.Create(playerInGame);
            await _botInGameRepository.CreateRange(botInGame);
            await _cardRepository.CreateRange(deck);
            return response;
        }
        public async Task<GetContinueGameView> GetContinue(string userId)
        {
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist");
            }
            var activeGame = activeGameOfUser.Game;
            var gameId = activeGame.Id;
            var playerInGameExisted = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameExisted.Count == 0)
            {
                throw new CustomServiceException("Player in game doesn`t exist!");
            }
            var deck = await _cardRepository.GetByGameId(gameId);
            if (deck.Count == 0)
            {
                throw new CustomServiceException("Deck doesn`t exist!");
            }
            var playerStepExisted = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepExisted.Count == 0)
            {
                throw new CustomServiceException("Player step doesn`t exist!");
            }
            var botStepsExisted = await _botStepRepository.GetByGameId(gameId);
            if (botStepsExisted.Count == 0)
            {
                throw new CustomServiceException("Bot and steps doesn`t exist");
            }
            var botInGameExisted = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameExisted.Count == 0)
            {
                throw new CustomServiceException("Bot in game doesn`t exist");
            }
            var status = StatusType.Continue;
            var winner = activeGame.Winner;
            var player = playerInGameExisted
                .Select(x => x.Player)
                .FirstOrDefault();
            var botList = botStepsExisted
               .GroupBy(x => x.BotId)
               .Select(x => x.First().Bot)
               .ToList();
            var playerCard = GetPlayerCard(deck);
            var playerStep = new PlayerStep()
            {
                Rank = playerCard.Rank,
                Suit = playerCard.Suit,
                GameId = gameId
            };
            var playerInGame = new PlayerInGame()
            {
                PlayerId = player.Id,
                GameId = gameId,
                Score = GetCardValue(playerCard.Rank)
            };
            var playerScoreExisted = playerInGameExisted
                .Select(x => x.Score)
                .Sum();
            var playerScore = playerScoreExisted += GetCardValue(playerCard.Rank);
            var clearCards = await _cardRepository.GetByGameId(gameId);
            if (clearCards.Count == 0)
            {
                throw new CustomServiceException("Cards doesn`t exist!");
            }
            var botsCards = GetCardsOfBots(botList, deck);
            var botsSteps = GetBotSteps(botList, botsCards, gameId);
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = gameId,
                    BotId = x.BotId,
                    Score = GetCardValue(x.Rank)

                })
                .ToList();
            var scoredBotExistedPoints = GetCalculatedBotExistingPoint(botInGame, botInGameExisted, gameId);
            var botsScore = GetCalculatedScoreBotPoints(scoredBotExistedPoints, gameId);
            GetWinner(botsScore, botList, status, winner, playerScore, player, activeGame, gameId);
            await _cardRepository.RemoveRange(clearCards);
            var cardsOfGame = deck
                .Select(x => new Card()
                {
                    GameId = gameId,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
            botStepsExisted.AddRange(botsSteps);
            playerStepExisted.Add(playerStep);

            var groupedBotSteps = botStepsExisted.GroupBy(x => x.BotId);
            var botContinueGameViewItems = new List<BotGetContinueGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botContinueGameViewItem = new BotGetContinueGameViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                botContinueGameViewItem.Name = botName;
                botContinueGameViewItem.Cards = item.Select(cardContinueGameViewItem => new CardGetContinueGameViewItem()
                {
                    Rank = cardContinueGameViewItem.Rank,
                    Suit = cardContinueGameViewItem.Suit
                })
                .ToList();
                botContinueGameViewItems.Add(botContinueGameViewItem);
            }
            var response = new GetContinueGameView()
            {
                Status = activeGame.Status,
                Winner = activeGame.Winner,
                Player = new PlayerGetContinueGameView()
                {
                    Name = player.Name,
                    Cards = playerStepExisted
                    .Select(cardContinueGameViewItem => new CardGetContinueGameViewItem()
                    {
                        Rank = cardContinueGameViewItem.Rank,
                        Suit = cardContinueGameViewItem.Suit
                    })
                    .ToList()

                },
                Bots = botContinueGameViewItems
            };

            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _botInGameRepository.CreateRange(botInGame);
            await _playerInGameRepository.Create(playerInGame);
            await _gameRepository.Update(activeGame);
            await _cardRepository.CreateRange(cardsOfGame);
            return response;
        }
        public async Task<GetEndGameView> GetEnd(string userId)
        {
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist");
            }
            var activeGame = activeGameOfUser.Game;
            var gameId = activeGame.Id;
            var playerInGameExisted = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameExisted.Count == 0)
            {
                throw new CustomServiceException("Player in game doesn`t exist!");
            }
            var deck = await _cardRepository.GetByGameId(gameId);
            if (deck.Count == 0)
            {
                throw new CustomServiceException("Deck doesn`t exist!");
            }
            var playerStepExisted = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepExisted.Count == 0)
            {
                throw new CustomServiceException("Player and steps doesn`t exist!");
            }
            var botStepExisted = await _botStepRepository.GetByGameId(gameId);
            if (botStepExisted.Count == 0)
            {
                throw new CustomServiceException("Bot and steps doesn`t exist!");
            }
            var botInGameExisted = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameExisted.Count == 0)
            {
                throw new CustomServiceException("Bot in game doesn`t exist!");
            }

            var status = StatusType.End;
            var winner = activeGame.Winner;
            var player = playerInGameExisted.Select(x => x.Player).FirstOrDefault();
            var playerScore = playerInGameExisted
                .Select(x => x.Score)
                .Sum();
            var botList = botStepExisted
                      .GroupBy(x => x.BotId)
                      .Select(x => x.First().Bot)
                      .ToList();
            var botInGame = new List<BotInGame>();
            var scoredBotExistedPoints = GetCalculatedBotExistingPoint(botInGame, botInGameExisted, gameId);
            var botsScore = GetCalculatedScoreBotPoints(scoredBotExistedPoints, gameId);
            var maxBotScore = botsScore.Max(x => x.Score);
            if (maxBotScore < 16)
            {
                var botsCards = GetCardsOfBots(botList, deck);
                var botsSteps = GetBotSteps(botList, botsCards, gameId);
                botInGame = botsSteps
                    .Select(x => new BotInGame()
                    {
                        GameId = gameId,
                        BotId = x.BotId,
                        Score = GetCardValue(x.Rank)

                    })
                    .ToList();
                var clearCards = await _cardRepository.GetByGameId(gameId);
                if (clearCards.Count == 0)
                {
                    throw new CustomServiceException("Cards doesn`t exist!");
                }
                await _cardRepository.RemoveRange(clearCards);
                var cardsOfGame = deck
                    .Select(x => new Card()
                    {
                        GameId = gameId,
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                    .ToList();
                scoredBotExistedPoints.AddRange(botInGame);
                botsScore = GetCalculatedScoreBotPoints(scoredBotExistedPoints, gameId);
                botStepExisted.AddRange(botsSteps);
                await _botStepRepository.CreateRange(botsSteps);
                await _cardRepository.CreateRange(cardsOfGame);
                await _botInGameRepository.CreateRange(botInGame);
            }
            GetWinner(botsScore, botList, status, winner, playerScore, player, activeGame, gameId);
            var groupedBotSteps = botStepExisted.GroupBy(x => x.BotId);
            var botEndGameViewItems = new List<BotGetEndGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                var botEndGameViewItem = new BotGetEndGameViewItem()
                {
                    Name = botName,
                    Cards = item.Select(x => new CardGetEndGameViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                .ToList()
                };
                botEndGameViewItems.Add(botEndGameViewItem);
            }
            var response = new GetEndGameView()
            {
                Status = activeGame.Status,
                Winner = activeGame.Winner,
                Player = new PlayerGetEndGameView()
                {
                    Name = player.Name,
                    Cards = playerStepExisted
                    .Select(cardEndGameViewItem => new CardGetEndGameViewItem()
                    {
                        Rank = cardEndGameViewItem.Rank,
                        Suit = cardEndGameViewItem.Suit
                    })
                    .ToList()
                },
                Bots = botEndGameViewItems
            };
            await _gameRepository.Update(activeGame);
            return response;
        }
        private int GetCardValue(CardRankType rank)
        {
            int value = (int)rank;
            if ((int)rank >= 10 && 13 >= (int)rank)
            {
                value = 10;
            }
            return value;
        }
        private void GetWinner(List<BotInGame> botsScore, List<Bot> botList, StatusType status, string winner, int playerScore, Player player, Game activeGame, Guid gameId)
        {
            var calculatedBotScore = GetCalculatedScoreBotPoints(botsScore, gameId);
            var notBustedBots = GetNotBustedBots(botsScore, calculatedBotScore);
            if (notBustedBots.Count > 0)
            {
                var maxBotScore = notBustedBots.Max(x => x.Score);
                var botWinner = notBustedBots.FirstOrDefault(x => x.Score == maxBotScore);
                var bot = botList.FirstOrDefault(x => x.Id == botWinner.BotId);

                if (playerScore == 21)
                {
                    status = StatusType.Blackjack;
                    winner = player.Name;
                }
                if (playerScore == maxBotScore && status == StatusType.End || playerScore == 21 && maxBotScore == 21)
                {
                    status = StatusType.End;
                    winner = StatusType.Draw.ToString();
                }
                if (playerScore > maxBotScore && status == StatusType.End)
                {
                    status = StatusType.End;
                    winner = player.Name;
                }
                if (playerScore > 21 && status == StatusType.Continue || playerScore < maxBotScore && status == StatusType.End)
                {
                    status = StatusType.End;
                    winner = bot.Name;
                }
                if (maxBotScore == 21 || playerScore > 21 && maxBotScore == 21)
                {
                    status = StatusType.Blackjack;
                    winner = bot.Name;
                }
            }
            if (notBustedBots.Count == 0)
            {
                if (playerScore > 21)
                {
                    status = StatusType.End;
                    winner = StatusType.LoseAll.ToString();
                }
                if (playerScore < 21)
                {
                    status = StatusType.End;
                    winner = player.Name;
                }
                if (playerScore == 21)
                {
                    status = StatusType.Blackjack;
                    winner = player.Name;
                }
            }
            activeGame.Status = status;
            activeGame.Winner = winner;
        }
        private List<BotInGame> GetNotBustedBots(List<BotInGame> botsScore, List<BotInGame> calculatedBotScore)
        {
            var groupedBotsScore = botsScore.GroupBy(x => x.BotId);
            foreach (var item in groupedBotsScore)
            {
                var maxScore = calculatedBotScore.Max(x => x.Score);
                if (maxScore > 21)
                {
                    var del = calculatedBotScore.FirstOrDefault(x => x.Score == maxScore);
                    calculatedBotScore.Remove(del);
                }
            }
            var result = calculatedBotScore;
            return result;
        }
        private List<Card> GetCardsOfBots(List<Bot> botList, List<Card> deck)
        {
            var result = new List<Card>();
            for (var i = 0; i < botList.Count; i++)
            {
                var card = deck.ElementAt(0);
                deck.RemoveAt(0);
                result.Add(card);
            }
            return result;
        }
        private Card GetPlayerCard(List<Card> deck)
        {
            var result = deck.ElementAt(0);
            deck.RemoveAt(0);
            return result;
        }
        private List<BotStep> GetBotSteps(List<Bot> botList, List<Card> botsCards, Guid gameId)
        {
            var result = new List<BotStep>();
            for (var i = 0; i < botList.Count; i++)
            {
                var step = new BotStep()
                {
                    BotId = botList[i].Id,
                    Rank = botsCards[i].Rank,
                    Suit = botsCards[i].Suit,
                    GameId = gameId
                };
                result.Add(step);
            }
            return result;
        }
        private List<BotInGame> GetCalculatedScoreBotPoints(List<BotInGame> scoredBotExistedPoints, Guid gameId)
        {
            var groupedBotsScore = scoredBotExistedPoints
                .GroupBy(x => x.BotId);
            var result = groupedBotsScore
                .Select(x => new BotInGame()
                {
                    Score = x.Select(s => s.Score).Sum(),
                    BotId = x.FirstOrDefault().BotId,
                    GameId = gameId
                })
                .ToList();
            return result;
        }
        private List<BotInGame> GetCalculatedBotExistingPoint(List<BotInGame> botInGame, List<BotInGame> botInGameExisted, Guid gameId)
        {
            var result = new List<BotInGame>();
            result = botInGame
                 .Select(x => new BotInGame()
                 {
                     GameId = x.GameId,
                     BotId = x.BotId,
                     Score = x.Score
                 })
                 .ToList();
            var groupedBotInGame = botInGameExisted
                .GroupBy(x => x.BotId);
            var items = groupedBotInGame
               .Select(x => new BotInGame()
               {
                   Score = x.Select(s => s.Score).Sum(),
                   BotId = x.FirstOrDefault().BotId,
                   GameId = gameId
               })
               .ToList();
            result.AddRange(items);
            return result;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using BlackJack.DataAccess.Repositories.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace BlackJack.BusinessLogic.Services
{
    public class GameService : IGameService
    {
        private readonly UserManager<User> _userManager;
        protected readonly IGameRepository _gameRepository;
        protected readonly IPlayerRepository _playerRepository;
        protected readonly IBotRepository _botRepository;
        protected readonly IPlayerStepRepository _playerStepRepository;
        protected readonly IBotStepRepository _botStepRepository;
        protected readonly ICardRepository _cardRepository;
        protected readonly IBotInGameRepository _botInGameRepository;
        protected readonly IPlayerInGameRepository _playerInGameRepository;

        public GameService(UserManager<User> userManager, IGameRepository gameRepository, IPlayerRepository playerRepository, IBotRepository botRepository, IPlayerStepRepository playerStepRepository,
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
        }
        public async Task<PlayGameView> GetActive(string userId)
        {
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist");
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
            var botPlayGameViewItems = new List<BotPlayGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var currentBotName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                if(currentBotName == null)
                {
                    throw new CustomServiceException("Bot is doesn`t exist");
                }
                var botPlayGameViewItem = new BotPlayGameViewItem()
                {
                    Name = currentBotName,
                    Cards = item.Select(cardPlayGameViewItem => new CardPlayGameViewItem()
                    {
                        Rank = cardPlayGameViewItem.Rank,
                        Suit = cardPlayGameViewItem.Suit
                    })
                .ToList()
                };
                botPlayGameViewItems.Add(botPlayGameViewItem);
            }
            var response = new PlayGameView()
            {
                NumberOfBots = activeGame.NumberOfBots,
                Status = activeGame.Status,
                Winner = activeGame.Winner,
                Player = new PlayerPlayGameView()
                {
                    Name = playerInGame
                    .Select(x => x.Player.Name)
                    .FirstOrDefault(),
                    Cards = playerStep
                    .Select(cardPlayGameViewItem => new CardPlayGameViewItem()
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
        public async Task<PlayGameView> Play(int numberOfBots, string userId)
        {
            var player = await _playerRepository.GetByUserId(userId);
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
            var shuffledDeck = CardHelper();
            var deck = shuffledDeck
                .Select(x => new Card()
                {
                    GameId = gameId,
                    Rank = x.Rank,
                    Suit = x.Suit,
                })
                .ToList();
            var playerCard = deck.ElementAt(0);
            deck.RemoveAt(0);
            var playerStep = new PlayerStep()
            {
                Rank = playerCard.Rank,
                Suit = playerCard.Suit,
                GameId = game.Id
            };
            var botsCards = new List<Card>();
            DistributeCardsToBots(botList, botsCards, deck);
            var botsSteps = new List<BotStep>();
            AddCardsToBotSteps(botList, botsCards, botsSteps, gameId);
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
            var cardPlayGameViewItems = new List<CardPlayGameViewItem>();
            cardPlayGameViewItems.Add(new CardPlayGameViewItem()
            {
                Rank = playerStep.Rank,
                Suit = playerStep.Suit
            });
            var groupedBotsSteps = botsSteps.GroupBy(x => x.BotId);
            var botPlayGameViewItems = new List<BotPlayGameViewItem>();
            foreach (var item in groupedBotsSteps)
            {
                var currentBotName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                var botPlayGameViewItem = new BotPlayGameViewItem()
                {
                    Name = currentBotName,
                    Cards = item
                    .Select(cardPlayGameViewItem => new CardPlayGameViewItem()
                    {
                        Rank = cardPlayGameViewItem.Rank,
                        Suit = cardPlayGameViewItem.Suit
                    })
                    .ToList()
                };
                botPlayGameViewItems.Add(botPlayGameViewItem);
            }
            var response = new PlayGameView()
            {
                NumberOfBots = numberOfBots,
                Status = StatusType.New,
                Winner = winner,
                Player = new PlayerPlayGameView()
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
        public async Task<ContinueGameView> Continue(string userId)
        {
            var gameId = Guid.NewGuid();
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist");
            }
            var activeGame = activeGameOfUser.Game;
            gameId = activeGame.Id;
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
            var player = playerInGameExisted.Select(x => x.Player).FirstOrDefault();
            var playerCard = deck.ElementAt(0);
            deck.RemoveAt(0);
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
            var botsCards = new List<Card>();
            var botList = botStepsExisted
                .GroupBy(x => x.BotId)
                .Select(x => x.First().Bot)
                .ToList();
            DistributeCardsToBots(botList, botsCards, deck);
            var botsSteps = new List<BotStep>();
            AddCardsToBotSteps(botList, botsCards, botsSteps, gameId);
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = gameId,
                    BotId = x.BotId,
                    Score = GetCardValue(x.Rank)

                })
                .ToList();
            var bots = botInGameExisted
               .Select(x => x.Bot)
               .Distinct()
               .ToList();
            var groupedBotInGame = botInGameExisted
                .GroupBy(x => x.BotId);
            var scoredBotExistedPoints = new List<BotInGame>();
            scoredBotExistedPoints.AddRange(botInGame);
            CalculateScoreBotExistingPoint(scoredBotExistedPoints, groupedBotInGame, gameId);
            var groupedBotsScore = scoredBotExistedPoints.GroupBy(x => x.BotId);
            var botsScore = GetCalculatedScoreBotPoints(groupedBotsScore, gameId);
            GetkWinner(botsScore, bots, status, winner, playerScore, player, activeGame, gameId);
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
            var botContinueGameViewItems = new List<BotContinueGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botContinueGameViewItem = new BotContinueGameViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                botContinueGameViewItem.Name = botName;
                botContinueGameViewItem.Cards = item.Select(cardContinueGameViewItem => new CardContinueGameViewItem()
                {
                    Rank = cardContinueGameViewItem.Rank,
                    Suit = cardContinueGameViewItem.Suit
                })
                .ToList();
                botContinueGameViewItems.Add(botContinueGameViewItem);
            }
            var response = new ContinueGameView()
            {
                Status = activeGame.Status,
                Winner = activeGame.Winner,
                Player = new PlayerContinueGameView()
                {
                    Name = player.Name,
                    Cards = playerStepExisted
                    .Select(cardContinueGameViewItem => new CardContinueGameViewItem()
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
        public async Task<EndGameView> End(string userId)
        {
            var gameId = Guid.NewGuid();
            var activeGameOfUser = await _playerInGameRepository.GetActiveByUserId(userId);
            if (activeGameOfUser == null)
            {
                throw new CustomServiceException("Active game is doesn`t exist");
            }
            var activeGame = activeGameOfUser.Game;
            gameId = activeGame.Id;
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
            var bots = botInGameExisted
                .Select(x => x.Bot)
                .Distinct()
                .ToList();
            var groupedBotInGame = botInGameExisted.GroupBy(x => x.BotId);
            var scoredBotExistedPoints = new List<BotInGame>();
            CalculateScoreBotExistingPoint(scoredBotExistedPoints, groupedBotInGame, gameId);
            var groupedBotsScore = scoredBotExistedPoints.GroupBy(x => x.BotId);
            var botsScore = GetCalculatedScoreBotPoints(groupedBotsScore, gameId);
            var maxBotScore = botsScore.Max(x => x.Score);
            if (maxBotScore < 17)
            {
                var botList = botStepExisted
                    .GroupBy(x => x.BotId)
                    .Select(x => x.First().Bot)
                    .ToList();

                var botsCards = new List<Card>();
                DistributeCardsToBots(botList, botsCards, deck);
                var botsSteps = new List<BotStep>();
                AddCardsToBotSteps(botList, botsCards, botsSteps, gameId);
                var botInGame = botsSteps
                    .Select(x => new BotInGame()
                    {
                        GameId = gameId,
                        BotId = x.BotId,
                        Score = GetCardValue(x.Rank)

                    })
                    .ToList();
                scoredBotExistedPoints.AddRange(botInGame);
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
                groupedBotsScore = scoredBotExistedPoints.GroupBy(x => x.BotId);
                botsScore = GetCalculatedScoreBotPoints(groupedBotsScore, gameId);
                await _botStepRepository.CreateRange(botsSteps);
                await _cardRepository.CreateRange(cardsOfGame);
                await _botInGameRepository.CreateRange(botInGame);
                botStepExisted.AddRange(botsSteps);
            }
            GetkWinner(botsScore, bots, status, winner, playerScore, player, activeGame, gameId); 
            var response = new EndGameView();
            response.Status = activeGame.Status;
            response.Winner = activeGame.Winner;
            var groupedBotSteps = botStepExisted.GroupBy(x => x.BotId);
            var botEndGameViewItems = new List<BotEndGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).Name;
                var botEndGameViewItem = new BotEndGameViewItem()
                {
                    Name = botName,
                    Cards = item.Select(x => new CardEndGameViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                .ToList()
                };
                botEndGameViewItems.Add(botEndGameViewItem);
            }
            response.Bots.AddRange(botEndGameViewItems);
            response.Player = new PlayerEndGameView()
            {
                Name = player.Name,
                Cards = playerStepExisted
                    .Select(cardEndGameViewItem => new CardEndGameViewItem()
                    {
                        Rank = cardEndGameViewItem.Rank,
                        Suit = cardEndGameViewItem.Suit
                    })
                    .ToList()
            };
            await _gameRepository.Update(activeGame);
            return response;
        }
        private List<Card> CardHelper()
        {
            var ranks = Enum.GetValues(typeof(CardRankType))
              .Cast<CardRankType>()
              .ToList();
            var suits = Enum.GetValues(typeof(CardSuitType))
                .Cast<CardSuitType>()
                .ToList();
            var deck = suits
                  .SelectMany(s => ranks
                  .Select(c => new Card()
                  {
                      Suit = (CardSuitType)s,
                      Rank = (CardRankType)c
                  }))
                  .ToList();
            deck = deck.OrderBy(x => Guid.NewGuid()).ToList();
            return deck;
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
        private void GetkWinner(List<BotInGame> botsScore, List<Bot> bots, StatusType status, string winner, int playerScore, Player player, Game activeGame, Guid gameId)
        {
            var groupBotScore = botsScore.GroupBy(x => x.BotId);
            var botScore = new List<BotInGame>();
            foreach (var item in groupBotScore)
            {
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.Score;
                    });
                var value = currentBotPoints;
                var record = new BotInGame()
                {
                    Score = value,
                    BotId = item.Key,
                    GameId = gameId
                };
                botScore.Add(record);
            }
            foreach (var item in groupBotScore)
            {
                var currentBot = bots.FirstOrDefault(x => x.Id == item.Key);
                var maxScore = botScore.Max(x => x.Score);
                if (maxScore > 21)
                {
                    var del = botScore.FirstOrDefault(x => x.Score == maxScore);
                    botScore.Remove(del);
                }
            }
            if (botScore.Count > 0)
            {
                var maxBotScore = botScore.Max(x => x.Score);
                var botWinner = botScore.FirstOrDefault(x => x.Score == maxBotScore);
                var profileWinnerBot = bots.FirstOrDefault(x => x.Id == botWinner.BotId);
                if (playerScore == maxBotScore && status == StatusType.End)
                {
                    status = StatusType.End;
                    winner = StatusType.Draw.ToString();
                    activeGame.Status = status;
                    activeGame.Winner = winner;
                }
                if (playerScore > maxBotScore && status == StatusType.End)
                {
                    winner = player.Name;
                    activeGame.Status = status;
                    activeGame.Winner = winner.ToString();
                }
                if (playerScore > 21 && status == StatusType.Continue || playerScore < maxBotScore && status == StatusType.End)
                {
                    botWinner.Score = maxBotScore;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = gameId;
                    status = StatusType.End;
                    winner = profileWinnerBot.Name;
                    activeGame.Status = status;
                    activeGame.Winner = winner;

                }
                if (maxBotScore == 21 || playerScore > 21 && maxBotScore == 21)
                {
                    botWinner.Score = maxBotScore;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = gameId;
                    status = StatusType.Blackjack;
                    winner = profileWinnerBot.Name;
                    activeGame.Status = status;
                    activeGame.Winner = winner;
                }

            }
            if (playerScore < 21 && botScore.Count == 0)
            {
                status = StatusType.End;
                winner = player.Name;
                activeGame.Status = status;
                activeGame.Winner = winner.ToString();
            }
            if (playerScore > 21 && botScore.Count == 0)
            {
                status = StatusType.End;
                winner = StatusType.LoseAll.ToString();
            }
            if (playerScore == 21)
            {
                status = StatusType.Blackjack;
                winner = player.Name;
                activeGame.Status = status;
                activeGame.Winner = winner.ToString();
            }
            activeGame.Status = status;
            activeGame.Winner = winner;
        }
        private void DistributeCardsToBots(List<Bot> botList, List<Card> botsCards, List<Card> deck)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var card = deck.ElementAt(0);
                deck.RemoveAt(0);
                botsCards.Add(card);
            }
        }
        private void AddCardsToBotSteps(List<Bot> botList, List<Card> botsCards, List<BotStep> botsSteps, Guid gameId)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var step = new BotStep()
                {
                    BotId = botList[i].Id,
                    Rank = botsCards[i].Rank,
                    Suit = botsCards[i].Suit,
                    GameId = gameId
                };
                botsSteps.Add(step);
            }
        }
        private List<BotInGame> GetCalculatedScoreBotPoints(IEnumerable<IGrouping<Guid, BotInGame>> groupedBotsScore, Guid gameId)
        {
            var result = new List<BotInGame>();
            foreach (var item in groupedBotsScore)
            {
                var value = item.ToList()
                    .Select(x => x.Score)
                    .Sum();
                var record = new BotInGame()
                {
                    Score = value,
                    BotId = item.Key,
                    GameId = gameId

                };
                result.Add(record);
            }
            return result;
        }
        private void CalculateScoreBotExistingPoint(List<BotInGame> scoredBotExistedPoints, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotInGame, Guid gameId)
        {
            foreach (var item in groupedBotInGame)
            {
                var value = item.ToList()
                    .Select(x => x.Score)
                    .Sum();
                var record = new BotInGame()
                {
                    Score = value,
                    BotId = item.Key,
                    GameId = gameId
                };
                scoredBotExistedPoints.Add(record);
            }

        }
    }
}
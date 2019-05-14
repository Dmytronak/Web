using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using BlackJack.DataAccess.Interfaces;
using BlackJack.ViewModels.GameViews;
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
      
        public async Task<PlayGameView> GetActive()
        {
            var response = new PlayGameView();
            var game = await _gameRepository.GetActiveGame();
            if (game == null)
            {
                response.Status = StatusType.NoGames;
            }
            if (game != null)
            {
                var playerStep = await _playerStepRepository.GetByGameId(game.Id);
                var boSteps = await _botStepRepository.GetByGameId(game.Id);
                var playerInGame = await _playerInGameRepository.GetByGameId(game.Id);
                var playerGame = playerInGame.Select(x => x).FirstOrDefault(x => x.GameId == game.Id);
                var player = await _playerRepository.GetById(playerGame.PlayerId);
                var user = _userManager.FindByIdAsync(player.UserId);
                var status = game.Status;
                var winner = game.Winner;
                response.NumberOfBots = game.NumberOfBots;
                response.Email = user.Result.Email;
                response.Status = status;
                response.Winner = winner;
                var groupedPlayerStep = playerStep.GroupBy(x => x.GameId);
                response.Player = groupedPlayerStep
                    .Select(x => new PlayerPlayGameViewItem()
                    {
                        Name = player.Name,
                        Cards = playerStep.Select(d=>new CardPlayGameViewItem() {
                            Rank = d.Rank,
                            Suit = d.Suit
                        })
                        .ToList()
                    })
                    .ToList();
                var botList = boSteps
                    .Select(x => x.Bot)
                    .Distinct()
                    .ToList();
                var groupedBotSteps = boSteps.GroupBy(x => x.BotId);
                var botPlayGameViewItems = new List<BotPlayGameViewItem>();
                foreach (var item in groupedBotSteps)
                {
                    var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                    var botPlayGameViewItem = new BotPlayGameViewItem() {
                        Name = currentBot,
                        Cards = item.Select(x => new CardPlayGameViewItem()
                        {
                            Rank = x.Rank,
                            Suit = x.Suit
                        })
                    .ToList()
                    };
                    botPlayGameViewItems.Add(botPlayGameViewItem);
                }
                response.Bots.AddRange(botPlayGameViewItems);
                return response;
            }
            return response;
        }
        public async Task<PlayGameView> Play(PlayGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new CustomErrorException("User doesn`t exist!");
            }
            var player = await _playerRepository.GetByUserId(user.Result.Id);
            var winner = "No one";
            var bots = await _botRepository.GetAll();
            if (bots.Count == 0)
            {
                throw new CustomErrorException("Bots doesn`t exist. Add bots on Data base!");
            }
            var botList = bots
                .OrderBy(r => Guid.NewGuid())
                .Take(model.NumberOfBots)
                .ToList();
            var game = new Game()
            {
                NumberOfBots = model.NumberOfBots,
                Status = StatusType.New,
                Winner = winner
            };
            var deck = new List<Card>();
            deck.AddRange(Shuffle());
            var playerCard = deck.ElementAt(0);
            deck.RemoveAt(0);
            var playerStep = new PlayerStep()
            {
                Rank = playerCard.Rank,
                Suit = playerCard.Suit,
                GameId = game.Id
            };
            var gameId = game.Id;
            var cardForBots = new List<Card>();
            CardForBots(botList, cardForBots, deck);
            var botsSteps = new List<BotStep>();
            BotSteps(botList, cardForBots, game, botsSteps, gameId);
            var playerInGame = new PlayerInGame()
            {
                PlayerId = player.Id,
                GameId = game.Id,
                Score = CountingCards(playerCard.Rank)
            };
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = game.Id,
                    BotId = x.BotId,
                    Score = CountingCards(x.Rank)
                })
                .ToList();
            var cardsOfGame = deck
                .Select(x => new Card()
                {
                    GameId = game.Id,
                    Rank = x.Rank,
                    Suit = x.Suit
                }
                ).ToList();
            var response = new PlayGameView();
            response.NumberOfBots = model.NumberOfBots;
            response.Email = model.Email;
            response.Status = StatusType.New;
            response.Winner = winner;
            var cardPlayGameViewItems = new List<CardPlayGameViewItem>();
            cardPlayGameViewItems.Add(new CardPlayGameViewItem()
            {
                Rank = playerStep.Rank,
                Suit = playerStep.Suit
            });
            response.Player.Add(new PlayerPlayGameViewItem()
            {
                Name = player.Name,
                Cards = cardPlayGameViewItems
            });
            var groupedBotsSteps = botsSteps.GroupBy(x => x.BotId);
            var botPlayGameViewItems = new List<BotPlayGameViewItem>();
            foreach (var item in groupedBotsSteps)
            {
                var botPlayGameViewItem = new BotPlayGameViewItem();
                var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                botPlayGameViewItem.Name = currentBot;
                botPlayGameViewItem.Cards = item.Select(x => new CardPlayGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                botPlayGameViewItems.Add(botPlayGameViewItem);
            }
            response.Bots.AddRange(botPlayGameViewItems);
            await _gameRepository.Create(game);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _cardRepository.CreateRange(cardsOfGame);
            await _playerInGameRepository.Create(playerInGame);
            await _botInGameRepository.CreateRange(botInGame);
            return response;
        }
        public async Task<ContinueGameView> Continue()
        {
            var gameId = Guid.NewGuid();
            var game = await _gameRepository.GetActiveGame();
            if (game == null)
            {
                throw new CustomErrorException("Active game doesn`t exist!");
            }
            if (game != null)
            {
                gameId = game.Id;

            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new CustomErrorException("Player in game doesn`t exist!");
            }
            var deck = await _cardRepository.GetByGameId(gameId);
            if (deck.Count == 0)
            {
                throw new CustomErrorException("Deck doesn`t exist!");
            }
            var playerStepDb = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepDb.Count == 0)
            {
                throw new CustomErrorException("Player step doesn`t exist!");
            }
            var botStepsDb = await _botStepRepository.GetByGameId(gameId);
            if (botStepsDb.Count == 0)
            {
                throw new CustomErrorException("Bot and steps doesn`t exist");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new CustomErrorException("Bot in game doesn`t exist");
            }
            var status = StatusType.Continue;
            var winner = game.Winner;
            var player = playerInGameDb.Select(x => x.Player).FirstOrDefault();

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
                Score = CountingCards(playerCard.Rank)

            };
            var playerScoreDB = playerInGameDb
                .Select(x => x.Score)
                .Sum();
            var playerScore = playerScoreDB += CountingCards(playerCard.Rank);
            var clearCards = await _cardRepository.GetByGameId(gameId);
            if (clearCards.Count == 0)
            {
                throw new CustomErrorException("Cards doesn`t exist!");
            }
            var cardForBots = new List<Card>();
            var botList = botStepsDb
                .Select(x => x.Bot)
                .Distinct()
                .ToList();
            CardForBots(botList, cardForBots,deck);
            var botsSteps = new List<BotStep>();
            BotSteps(botList, cardForBots, null, botsSteps, gameId);
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = gameId,
                    BotId = x.BotId,
                    Score = CountingCards(x.Rank)

                })
                .ToList();
            var bots = botInGameDb
               .Select(x => x.Bot)
               .Distinct()
               .ToList();
            var groupedBotInGame = botInGameDb
                .GroupBy(x => x.BotId);
            var scoredBotValuesDb = new List<BotInGame>();
            scoredBotValuesDb.AddRange(botInGame);
            ScorePointFromDb(scoredBotValuesDb, groupedBotInGame, gameId);
            var groupedBotsScore = scoredBotValuesDb.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            RoundScore(botsScore, groupedBotsScore, gameId);
            CheckWinner(botsScore, bots, status, winner, playerScore, player, game, gameId); // method of checking winner at continue game
            await _cardRepository.RemoveRange(clearCards);
            var cardsOfGame = deck
                .Select(x => new Card()
                {
                    GameId = gameId,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
            botStepsDb.AddRange(botsSteps);
            playerStepDb.Add(playerStep);
            var response = new ContinueGameView();
            response.Status = game.Status;
            response.Winner = game.Winner;
            var groupedBotSteps = botStepsDb.GroupBy(x => x.BotId);
            var botContinueGameViewItems = new List<BotContinueGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botContinueGameViewItem = new BotContinueGameViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                botContinueGameViewItem.Name = botName;
                botContinueGameViewItem.Cards = item.Select(x => new CardContinueGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
                botContinueGameViewItems.Add(botContinueGameViewItem);
            }
            response.Bots.AddRange(botContinueGameViewItems);
            var groupedPlayerSteps = playerStepDb.GroupBy(x => x.GameId);
            response.Player = groupedPlayerSteps
                .Select(x => new PlayerContinueGameViewItem()
                {
                    Name = player.Name,
                    Cards = playerStepDb
                    .Select(d => new CardContinueGameViewItem() {
                        Rank = d.Rank,
                        Suit = d.Suit
                    })
                    .ToList()
                })
                .ToList();

            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _cardRepository.CreateRange(cardsOfGame);
            await _botInGameRepository.CreateRange(botInGame);
            await _playerInGameRepository.Create(playerInGame);
            await _gameRepository.Update(game);
            return response;
        }
        public async Task<EndGameView> End()
        {
            var gameId = Guid.NewGuid();
            var game = await _gameRepository.GetActiveGame();
            if (game == null)
            {
                throw new CustomErrorException("Active game doesn`t exist!");
            }
            if (game != null)
            {
                gameId = game.Id;

            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new CustomErrorException("Player in game doesn`t exist!");
            }
            var deck = await _cardRepository.GetByGameId(gameId);
            if (deck.Count == 0)
            {
                throw new CustomErrorException("Deck doesn`t exist!");
            }
            var playerStepDb = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepDb.Count == 0)
            {
                throw new CustomErrorException("Player and steps doesn`t exist!");
            }
            var botStepDb = await _botStepRepository.GetByGameId(gameId);
            if (botStepDb.Count == 0)
            {
                throw new CustomErrorException("Bot and steps doesn`t exist!");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new CustomErrorException("Bot in game doesn`t exist!");
            }

            var status = StatusType.End;
            var winner = game.Winner;
            var player = playerInGameDb.Select(x => x.Player).FirstOrDefault();
            var playerScore = playerInGameDb
                .Select(x => x.Score)
                .Sum();
            var bots = botInGameDb
                .Select(x => x.Bot)
                .Distinct()
                .ToList();
            var groupedBotInGame = botInGameDb.GroupBy(x => x.BotId);
            var scoredBotValuesDb = new List<BotInGame>();
            ScorePointFromDb(scoredBotValuesDb, groupedBotInGame, gameId);
            var groupedBotsScore = scoredBotValuesDb.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            RoundScore(botsScore, groupedBotsScore, gameId);
            var maxBotScore = botsScore.Max(x => x.Score);
            if (maxBotScore < 17)
            {
                var botList = botStepDb
                  .Select(x => x.Bot)
                  .Distinct()
                  .ToList();
                var cardForBots = new List<Card>();
                CardForBots(botList, cardForBots,deck);
                var botsSteps = new List<BotStep>();
                BotSteps(botList, cardForBots, null, botsSteps, gameId);

                var botInGame = botsSteps
                    .Select(x => new BotInGame()
                    {
                        GameId = gameId,
                        BotId = x.BotId,
                        Score = CountingCards(x.Rank)

                    })
                    .ToList();
                scoredBotValuesDb.AddRange(botInGame);
                var clearCards = await _cardRepository.GetByGameId(gameId);
                if (clearCards.Count == 0)
                {
                    throw new CustomErrorException("Cards doesn`t exist!");
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
                groupedBotsScore = scoredBotValuesDb.GroupBy(x => x.BotId);
                botsScore = new List<BotInGame>();
                RoundScore(botsScore, groupedBotsScore, gameId);
                await _botStepRepository.CreateRange(botsSteps);
                await _cardRepository.CreateRange(cardsOfGame);
                await _botInGameRepository.CreateRange(botInGame);
                botStepDb.AddRange(botsSteps);
            }
            CheckWinner(botsScore, bots, status, winner, playerScore, player, game, gameId); // chose winner method 
            var response = new EndGameView();
            response.Status = game.Status;
            response.Winner = game.Winner;
            var groupedBotSteps = botStepDb.GroupBy(x => x.BotId);
            var botEndGameViewItems = new List<BotEndGameViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).Name;
                var botEndGameViewItem = new BotEndGameViewItem() {
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
            var groupedPlayerSteps = playerStepDb.GroupBy(x => x.GameId);
            response.Player = groupedPlayerSteps
                .Select(x => new PlayerEndGameViewItem()
                {
                    Name = player.Name,
                    Cards = playerStepDb
                    .Select(d => new CardEndGameViewItem()
                    {
                        Rank = d.Rank,
                        Suit = d.Suit
                    })
                    .ToList()
                })
                .ToList();
            await _gameRepository.Update(game);
            return response;
        }
        private List<Card> Shuffle()
        {
            var ranks = Enum.GetValues(typeof(CardRankType))
              .Cast<CardRankType>()
              .ToList();
            var suits = Enum.GetValues(typeof(CardSuitType))
                .Cast<CardSuitType>()
                .ToList();
           var  deck = suits
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
        private int CountingCards(CardRankType rank)
        {
            int value = (int)rank;
            if ((int)rank >= 10 && 13 >= (int)rank)
            {
                value = 10;
            }
            return value;
        }
        private void CheckWinner(List<BotInGame> botsScore, List<Bot> bots, StatusType status, string winner, int playerScore, Player player, Game game, Guid gameId)
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
                    game.Status = status;
                    game.Winner = winner;
                }
                if (playerScore > maxBotScore && status == StatusType.End)
                {
                    winner = player.Name;
                    game.Status = status;
                    game.Winner = winner.ToString();
                }
                if (playerScore > 21 && status == StatusType.Continue || playerScore < maxBotScore && status == StatusType.End)
                {
                    botWinner.Score = maxBotScore;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = gameId;
                    status = StatusType.End;
                    winner = profileWinnerBot.Name;
                    game.Status = status;
                    game.Winner = winner;

                }
                if (maxBotScore == 21 || playerScore > 21 && maxBotScore == 21)
                {
                    botWinner.Score = maxBotScore;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = gameId;
                    status = StatusType.Blackjack;
                    winner = profileWinnerBot.Name;
                    game.Status = status;
                    game.Winner = winner;
                }

            }
            if (playerScore < 21 && botScore.Count == 0)
            {
                status = StatusType.End;
                winner = player.Name;
                game.Status = status;
                game.Winner = winner.ToString();
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
                game.Status = status;
                game.Winner = winner.ToString();
            }
            game.Status = status;
            game.Winner = winner;
        }
        private void CardForBots(List<Bot> botList, List<Card> cardForBots, List<Card> deck)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var card = deck.ElementAt(0);
                deck.RemoveAt(0);
                cardForBots.Add(card);
            }
        }
        private void BotSteps(List<Bot> botList, List<Card> cardForBots, Game game, List<BotStep> botsSteps, Guid gameId)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var step = new BotStep()
                {
                    BotId = botList[i].Id,
                    Rank = cardForBots[i].Rank,
                    Suit = cardForBots[i].Suit,
                    GameId = gameId
                };
                botsSteps.Add(step);
            }
        }
        private void RoundScore(List<BotInGame> botsScore, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotsScore, Guid gameId)
        {
            foreach (var item in groupedBotsScore)
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
                botsScore.Add(record);
            }
        }
        private void ScorePointFromDb(List<BotInGame> scoredBotValuesDb, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotInGame, Guid gameId)
        {
            foreach (var item in groupedBotInGame)
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
                scoredBotValuesDb.Add(record);
            }

        }
    }
}
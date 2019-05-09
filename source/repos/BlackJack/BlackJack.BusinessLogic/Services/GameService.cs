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
        protected List<Card> deck;

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
            deck = new List<Card>();
        }
      
        public async Task<PlayGameView> GetActive()
        {
            var gameId = Guid.NewGuid();
            var existingGames = await _gameRepository.GetAll();
            if (existingGames == null)
            {
                throw new NullReferenceException("existingGames is null!");
            }
            var game = existingGames.Select(x => x).FirstOrDefault(x => x.Status == StatusType.New || x.Status == StatusType.Continue);
            var users = _userManager.Users.ToList();
            var response = new PlayGameView();
            if (game != null)
            {
                gameId = game.Id;
                var playerStep = await _playerStepRepository.GetByGameId(gameId);
                if (playerStep.Count == 0)
                {
                    throw new NullReferenceException("PlayerStep is null!");
                }
                var botAndSteps = await _botStepRepository.GetByGameId(gameId);
                if (botAndSteps.Count == 0)
                {
                    throw new NullReferenceException("BotAndSteps is null!");
                }
                var playersAndGames = await _playerInGameRepository.GetByGameId(gameId);
                var playersDB = await _playerRepository.GetAll();
                var playerGames = playersAndGames.Select(x => x).FirstOrDefault(x => x.GameId == gameId);
                var player = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
                var user = users.FirstOrDefault(x => x.Id == player.UserId);
                var playerId = player.Id;
                var status = game.Status;
                var winner = game.Winner;
                response.NumberOfBots = game.NumberOfBots;
                response.Email = user.Email;
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

                var botList = botAndSteps
                    .Select(x => x.Bot)
                    .Distinct()
                    .ToList();
                var groupedBotInGame = botAndSteps.GroupBy(x => x.BotId);
                var playGameBots = new List<BotPlayGameViewItem>();
                foreach (var item in groupedBotInGame)
                {
                    var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                    var viewItem = new BotPlayGameViewItem() {
                        Name = currentBot,
                        Cards = item.Select(x => new CardPlayGameViewItem()
                        {
                            Rank = x.Rank,
                            Suit = x.Suit
                        })
                    .ToList()
                    };
                    playGameBots.Add(viewItem);
                }
                response.Bots.AddRange(playGameBots);
                return response;
            }
            response.Status = StatusType.NoGames;
            return response;
        }
        public async Task<PlayGameView> Play(PlayGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var playersDb = await _playerRepository.GetAll();
            var player = playersDb.FirstOrDefault(x => x.UserId == user.Result.Id);
            var winner = "No one";
            var numbOfBots = model.NumberOfBots;
            var bots = await _botRepository.GetAll();
            if (bots.Count == 0)
            {
                throw new NullReferenceException("Bots is empty!");
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
            var ranks = Enum.GetValues(typeof(CardRankType))
                .Cast<CardRankType>()
                .ToList();
            var suits = Enum.GetValues(typeof(CardSuitType))
                .Cast<CardSuitType>()
                .ToList();
            deck = suits
                .SelectMany(s => ranks
                .Select(c => new Card()
                {
                    Suit = (CardSuitType)s,
                    Rank = (CardRankType)c
                }))
                .ToList();
            Shuffle();
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
            CardForBots(botList, cardForBots);
            var botsSteps = new List<BotStep>();
            BotSteps(botList, cardForBots, game, botsSteps, gameId);
            var cardsOfGame = deck
                .Select(x => new Card()
                {
                    GameId = game.Id,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
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
            var response = new PlayGameView();
            response.NumberOfBots = numbOfBots;
            response.Email = model.Email;
            response.Status = StatusType.New;
            response.Winner = winner;
            var playerViewCards = new List<CardPlayGameViewItem>();
            playerViewCards.Add(new CardPlayGameViewItem()
            {
                Rank = playerStep.Rank,
                Suit = playerStep.Suit
            });
            response.Player.Add(new PlayerPlayGameViewItem()
            {
                Name = player.Name,
                Cards = playerViewCards
            });
            var groupedBotInGame = botsSteps.GroupBy(x => x.BotId);
            var playGameBots = new List<BotPlayGameViewItem>();
            foreach (var item in groupedBotInGame)
            {
                var modelItem = new BotPlayGameViewItem();

                var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                modelItem.Name = currentBot;
                modelItem.Cards = item.Select(x => new CardPlayGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                playGameBots.Add(modelItem);
            }
            response.Bots.AddRange(playGameBots);

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
            var existingGames = await _gameRepository.GetAll();
            if (existingGames == null)
            {
                throw new NullReferenceException("existingGames is null!");
            }
            var activeGame = existingGames.Select(x => x).FirstOrDefault(x => x.Status == StatusType.New || x.Status == StatusType.Continue);
            if (activeGame != null)
            {
                gameId = activeGame.Id;

            }
            var playersAndGames = await _playerInGameRepository.GetByGameId(gameId);
            var playersDB = await _playerRepository.GetAll();
            var playerGames = playersAndGames.Select(x => x).FirstOrDefault(x => x.GameId == gameId);
            var status = StatusType.Continue;
            var winner = activeGame.Winner;
            var player = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
            var cards = await _cardRepository.GetByGameId(gameId);
            if (cards.Count == 0)
            {
                throw new NullReferenceException("Deck IN DB is empty!");
            }
            var playerStepDb = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepDb.Count == 0)
            {
                throw new NullReferenceException("PlayerStep is null!");
            }
            var botAndSteps = await _botStepRepository.GetByGameId(gameId);
            if (botAndSteps.Count == 0)
            {
                throw new NullReferenceException("BotAndSteps is null!");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new NullReferenceException("BotInGame is null!");
            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new NullReferenceException("PlayerInGame is null!");
            }
            var game = await _gameRepository.GetById(gameId);
            if (game == null)
            {
                throw new NullReferenceException("Game is null!");
            }
            deck = cards;
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
                throw new NullReferenceException("Cards is empty!");
            }
            var cardForBots = new List<Card>();
            var botList = botAndSteps
                .Select(x => x.Bot)
                .Distinct()
                .ToList();
            CardForBots(botList, cardForBots);
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
            botAndSteps.AddRange(botsSteps);
            playerStepDb.Add(playerStep);
            var response = new ContinueGameView();
            response.Status = game.Status;
            response.Winner = game.Winner;
      
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<BotContinueGameViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new BotContinueGameViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                bot.Name = botName;
                bot.Cards = item.Select(x => new CardContinueGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                botWithCards.Add(bot);
            }
            response.Bots.AddRange(botWithCards);
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
            var existingGames = await _gameRepository.GetAll();
            if (existingGames == null)
            {
                throw new NullReferenceException("existingGames is null!");
            }
            var activeGame = existingGames.Select(x => x).FirstOrDefault(x => x.Status == StatusType.New || x.Status == StatusType.Continue);
            if (activeGame != null)
            {
                gameId = activeGame.Id;

            }
            var playersAndGames = await _playerInGameRepository.GetByGameId(gameId);
            var playersDB = await _playerRepository.GetAll();
            var playerGames = playersAndGames.Select(x => x).FirstOrDefault(x => x.GameId == gameId);
            var status = StatusType.End;
            var winner = activeGame.Winner;
            var player = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
            var cards = await _cardRepository.GetByGameId(gameId);
            if (cards.Count == 0)
            {
                throw new NullReferenceException("Deck IN DB is empty!");
            }
            var playerStepDb = await _playerStepRepository.GetByGameId(gameId);
            if (playerStepDb.Count == 0)
            {
                throw new NullReferenceException("PlayerAndSteps is null!");
            }
            var botAndSteps = await _botStepRepository.GetByGameId(gameId);
            if (botAndSteps.Count == 0)
            {
                throw new NullReferenceException("BotAndSteps is null!");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new NullReferenceException("BotInGame is null!");
            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new NullReferenceException("PlayerInGame is null!");
            }
            var game = await _gameRepository.GetById(gameId);
            if (game == null)
            {
                throw new NullReferenceException("Game is null!");
            }
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
                deck = cards;
                var botList = botAndSteps
                  .Select(x => x.Bot)
                  .Distinct()
                  .ToList();
                var cardForBots = new List<Card>();
                CardForBots(botList, cardForBots);
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
                    throw new NullReferenceException("Cards is null!");
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
                botAndSteps.AddRange(botsSteps);
            }
            CheckWinner(botsScore, bots, status, winner, playerScore, player, game, gameId); // chose winner method 
            var response = new EndGameView();
            response.Status = game.Status;
            response.Winner = game.Winner;
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<BotEndGameViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).Name;
                var bot = new BotEndGameViewItem() {
                    Name = botName,
                    Cards = item.Select(x => new CardEndGameViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                .ToList()
                };
                botWithCards.Add(bot);
            }
            response.Bots.AddRange(botWithCards);
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
        private void Shuffle()
        {
            deck = deck.OrderBy(x => Guid.NewGuid()).ToList();
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
            var groupedBotWinner = botScore.GroupBy(x => x.BotId);
            foreach (var item in groupBotScore)
            {
                var currentBot = bots.FirstOrDefault(x => x.Id == item.Key);
                var msmDel = botScore.Max(x => x.Score);
                if (msmDel > 21)
                {
                    var del = botScore.FirstOrDefault(x => x.Score == msmDel);
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
        private void CardForBots(List<Bot> botList, List<Card> cardForBots)
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
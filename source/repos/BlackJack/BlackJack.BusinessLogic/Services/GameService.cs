using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Interfaces;
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
        public async Task<CreatePlayerGameView> CreateNewPlayer(CreatePlayerGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var player = new Player()
            {
                Name = model.Name,
                UserId = user.Result.Id
            };
            await _playerRepository.Create(player);
            var createPlayerGameView = new CreatePlayerGameView();
            createPlayerGameView.PlayerId = player.Id;
            createPlayerGameView.Name = player.Name;
            createPlayerGameView.Email = model.Email;
            return createPlayerGameView;
        }
        public async Task<GetPlayersGameView> GetAllPlayersByUser(GetPlayersGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var players = await _playerRepository.GetByUserId(user.Result.Id);
            var getPlayersGameView = new GetPlayersGameView();
            getPlayersGameView.Email = model.Email;
            getPlayersGameView.Players = players
                .Select(x => new Player()
                {
                    Id = x.Id,
                    Name = x.Name,
                    UserId = x.UserId
                })
                .ToList();
            return getPlayersGameView;
        }
        public async Task<PlayGameView> GetActiveGame()
        {
            var gameId = Guid.NewGuid();
            var existingGames = await _gameRepository.GetAll();
            if (existingGames == null)
            {
                throw new NullReferenceException("existingGames is null!");
            }
            var game = existingGames.Select(x => x).FirstOrDefault(x => x.Status == StatusType.New || x.Status == StatusType.Continue);
            var playGameView = new PlayGameView();
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
                var playerExistingGame = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
                var playerId = playerExistingGame.Id;
                var status = game.Status;
                var winner = game.Winner;
                playGameView.PlayerId = playerId;
                playGameView.NumberOfBots = game.NumberOfBots;
                playGameView.Status = status;
                playGameView.Winner = winner;
                playGameView.PlayerName = playerExistingGame.Name;
                playGameView.PlayerCards = playerStep
                    .Select(x => new CardPlayGameViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
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
                    var viewItem = new BotPlayGameViewItem();

                    var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                    viewItem.Name = currentBot;
                    viewItem.BotCards = item.Select(x => new CardPlayGameViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                    .ToList();

                    playGameBots.Add(viewItem);
                }
                playGameView.Bots.AddRange(playGameBots);
                return playGameView;
            }
            playGameView.Status = StatusType.NoGames; //8 no games
            return playGameView;
        }
        public async Task<PlayGameView> PlayGame(PlayGameView model)
        {
            var winner = "No one";
            var numbOfBots = model.NumberOfBots;
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new NullReferenceException("player is empty!");
            }
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
                PlayerId = model.PlayerId,
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
            var playGameView = new PlayGameView();
            playGameView.PlayerId = player.Id;
            playGameView.NumberOfBots = numbOfBots;
            playGameView.Status = StatusType.New;
            playGameView.Winner = winner;
            playGameView.PlayerName = player.Name;
            playGameView.PlayerCards
                .Add(new CardPlayGameViewItem()
                {
                    Rank = playerCard.Rank,
                    Suit = playerCard.Suit
                });
            var groupedBotInGame = botsSteps.GroupBy(x => x.BotId);
            var playGameBots = new List<BotPlayGameViewItem>();
            foreach (var item in groupedBotInGame)
            {
                var modelItem = new BotPlayGameViewItem();

                var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                modelItem.Name = currentBot;
                modelItem.BotCards = item.Select(x => new CardPlayGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                playGameBots.Add(modelItem);
            }
            playGameView.Bots.AddRange(playGameBots);

            await _gameRepository.Create(game);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _cardRepository.CreateRange(cardsOfGame);
            await _playerInGameRepository.Create(playerInGame);
            await _botInGameRepository.CreateRange(botInGame);

            return playGameView;
        }
        public async Task<ContinueGameView> ContinueGame()
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
                throw new NullReferenceException("ContinueBotAndSteps is null!");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new NullReferenceException("contBotInGame is null!");
            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new NullReferenceException("contPlayerInGame is null!");
            }
            var game = await _gameRepository.GetById(gameId);
            if (game == null)
            {
                throw new NullReferenceException("ContinueGame is null!");
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
            var continueGameView = new ContinueGameView();
            continueGameView.GameId = gameId;
            continueGameView.Status = game.Status;
            continueGameView.Winner = game.Winner;
            continueGameView.PlayerId = player.Id;
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<BotContinueGameViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new BotContinueGameViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).Name;
                bot.Name = botName;
                bot.BotCards = item.Select(x => new CardContinueGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                botWithCards.Add(bot);
            }
            continueGameView.Bots.AddRange(botWithCards);
            continueGameView.PlayerName = player.Name;
            continueGameView.PlayerCards = playerStepDb
                .Select(x => new CardContinueGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.CreateRange(botsSteps);
            await _cardRepository.CreateRange(cardsOfGame);
            await _botInGameRepository.CreateRange(botInGame);
            await _playerInGameRepository.Create(playerInGame);
            await _gameRepository.Update(game);

            return continueGameView;
        }
        public async Task<EndGameView> EndGame()
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
            var playerAndStepsDb = await _playerStepRepository.GetByGameId(gameId);
            if (playerAndStepsDb.Count == 0)
            {
                throw new NullReferenceException("endPlayerAndSteps is null!");
            }
            var botAndSteps = await _botStepRepository.GetByGameId(gameId);
            if (botAndSteps.Count == 0)
            {
                throw new NullReferenceException("BotAndSteps is null!");
            }
            var botInGameDb = await _botInGameRepository.GetByGameId(gameId);
            if (botInGameDb.Count == 0)
            {
                throw new NullReferenceException("endBotInGame is null!");
            }
            var playerInGameDb = await _playerInGameRepository.GetByGameId(gameId);
            if (playerInGameDb.Count == 0)
            {
                throw new NullReferenceException("endPlayerInGame is null!");
            }
            var game = await _gameRepository.GetById(gameId);
            if (game == null)
            {
                throw new NullReferenceException("endGame is null!");
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
            var endGameView = new EndGameView();
            endGameView.PlayerId = player.Id;
            endGameView.GameId = gameId;
            endGameView.Status = game.Status;
            endGameView.Winner = game.Winner;
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<BotEndGameViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new BotEndGameViewItem();
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).Name;
                bot.Name = botName;
                bot.BotCards = item.Select(x => new CardEndGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

                botWithCards.Add(bot);
            }
            endGameView.Bots.AddRange(botWithCards);
            endGameView.PlayerName = player.Name;
            endGameView.PlayerCards = playerAndStepsDb
                .Select(x => new CardEndGameViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();
            await _gameRepository.Update(game);
            return endGameView;
        }
        private void Shuffle()
        {
            deck = deck.OrderBy(x => Guid.NewGuid()).ToList();
        }//Shufle of deck
        private int CountingCards(CardRankType rank)
        {
            int value = (int)rank;
            if ((int)rank >= 10 && 13 >= (int)rank)
            {
                value = 10;
            }
            return value;
        }//Cards value from Card type
        private void CheckWinner(List<BotInGame> botsScore, List<Bot> bots, StatusType status, string winner, int playerScore, Player player, Game game, Guid gameId)
        {
            var groupBotScore = botsScore.GroupBy(x => x.BotId);
            var botScore = new List<BotInGame>();
            foreach (var item in groupBotScore)
            {
                var record = new BotInGame();
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.Score;
                    });
                var value = currentBotPoints;
                record.Score = value;
                record.BotId = item.Key;
                record.GameId = gameId;
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
        }//Check winner of rounds or game
        private void CardForBots(List<Bot> botList, List<Card> cardForBots)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var card = deck.ElementAt(0);
                deck.RemoveAt(0);
                cardForBots.Add(card);
            }

        } //Cards of round for bots 
        private void BotSteps(List<Bot> botList, List<Card> cardForBots, Game game, List<BotStep> botsSteps, Guid gameId)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var step = new BotStep();
                step.BotId = botList[i].Id;
                step.Rank = cardForBots[i].Rank;
                step.Suit = cardForBots[i].Suit;
                step.GameId = gameId;
                botsSteps.Add(step);
            }
        }// Apply cards of round for bots
        private void RoundScore(List<BotInGame> botsScore, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotsScore, Guid gameId)
        {
            foreach (var item in groupedBotsScore)
            {
                var record = new BotInGame();
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.Score;
                    });

                var value = currentBotPoints;

                record.Score = value;
                record.BotId = item.Key;
                record.GameId = gameId;
                botsScore.Add(record);
            }
        }// Score bots points of all cards
        private void ScorePointFromDb(List<BotInGame> scoredBotValuesDb, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotInGame, Guid gameId)
        {
            foreach (var item in groupedBotInGame)
            {
                var record = new BotInGame();

                //var currentBotStepRanks = item.Select(x => x.BotStepRank).ToList();
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.Score;
                    });

                var value = currentBotPoints;
                record.Score = value;
                record.BotId = item.Key;
                record.GameId = gameId;
                scoredBotValuesDb.Add(record);
            }

        } // Score bots points from DB
    }
}
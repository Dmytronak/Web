﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.DataAccess.Entities;
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
        protected List<Card> _cardList;

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
            _cardList = new List<Card>();
        }
        public async Task<CreatePlayerGameView> CreateNewPlayer(CreatePlayerGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var newPlayer = new Player()
            {
                Name = model.Name,
                UserId = Guid.Parse(user.Result.Id)
            };
            await _playerRepository.Create(newPlayer);
            var result = new CreatePlayerGameView();
            result.PlayerId = newPlayer.Id;
            result.Name = newPlayer.Name;
            result.Email = model.Email;


            return result;
        }
        public async Task<GetPlayersGameView> GetAllPlayersByUser(GetPlayersGameView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var players = await _playerRepository.GetPlayers(Guid.Parse(user.Result.Id));
            var result = new GetPlayersGameView();
            result.Email = model.Email;
            result.Players = players
                .Select(x => new Player()
                {
                    Id = x.Id,
                    Name = x.Name,
                    UserId = x.UserId
                })
                .ToList();

            return result;
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

            var newGame = new Game()
            {
                NumberOfBots = model.NumberOfBots,
                Status = Status.New.ToString(),
            };

            var ranks = Enum.GetValues(typeof(CardRank))
                .Cast<CardRank>()
                .ToList();

            var suits = Enum.GetValues(typeof(CardSuit))
                .Cast<CardSuit>()
                .ToList();

            _cardList = suits
                .SelectMany(s => ranks
                .Select(c => new Card()
                {
                    Suit = (CardSuit)s,
                    Rank = (CardRank)c
                }))
                .ToList();
            Shuffle();

            var playerCard = _cardList.ElementAt(0);
            _cardList.RemoveAt(0);
            var playerStep = new PlayerStep()
            {
                StepRank = playerCard.Rank,
                StepSuit = playerCard.Suit,
                GameId = newGame.Id
            };

            var cardForBots = new List<Card>();
            CardForBots(botList, cardForBots);
            var botsSteps = new List<BotStep>();
            BotSteps(botList, cardForBots, newGame, botsSteps, null, null);

            var cardsOfGame = _cardList
                .Select(x => new Card()
                {
                    GameId = newGame.Id,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

            var playerInGame = new PlayerInGame()
            {
                PlayerId = model.PlayerId,
                GameId = newGame.Id,
                PlayerScore = CountingCards(playerCard.Rank)
            };

            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = newGame.Id,
                    BotId = x.BotId,
                    BotScore = CountingCards(x.BotStepRank)

                })
                .ToList();

            var playGameModel = new PlayGameView();
            playGameModel.PlayerId = player.Id;
            playGameModel.NumberOfBots = numbOfBots;
            playGameModel.NewGameId = newGame.Id;
            playGameModel.Status = Status.New.ToString();
            playGameModel.Winner = winner;
            playGameModel.PlayerName = player.Name;
            playGameModel.PlayerCards
                .Add(new PlayGameCardsViewItem()
                {
                    StepRank = playerCard.Rank,
                    StepSuit = playerCard.Suit
                });
            var groupedBotInGame = botsSteps.GroupBy(x => x.BotId);
            var playGameBots = new List<PlayGameBotsViewItem>();
            foreach (var item in groupedBotInGame)
            {
                var modelItem = new PlayGameBotsViewItem();

                var currentBot = botList.FirstOrDefault(x => x.Id == item.Key).BotName;
                modelItem.BotName = currentBot;
                modelItem.BotCards = item.Select(x => new PlayGameCardsViewItem()
                {
                    StepRank = x.BotStepRank,
                    StepSuit = x.BotStepSuit
                })
                .ToList();

                playGameBots.Add(modelItem);
            }
            playGameModel.Bots.AddRange(playGameBots);

            await _gameRepository.Create(newGame);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
            await _playerInGameRepository.Create(playerInGame);
            await _botInGameRepository.AddList(botInGame);

            return playGameModel;
        }
        public async Task<ContinueGameView> ContinueGame(ContinueGameView model)
        {
            var gameId = model.GameId;
            var status = Status.Continue.ToString();
            var winner = "No one";
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new NullReferenceException("player is empty!");
            }
            var contCards = await _cardRepository.GetCards(model.GameId);
            if (contCards.Count == 0)
            {
                throw new NullReferenceException("Deck IN DB is empty!");
            }
            var contPlayerStep = await _playerStepRepository.GetPlayerSteps(model.GameId);
            if (contPlayerStep.Count == 0)
            {
                throw new NullReferenceException("PlayerStep is null!");
            }
            var botAndSteps = await _botStepRepository.GetStepsAndBot(model.GameId);
            if (botAndSteps.Count == 0)
            {
                throw new NullReferenceException("ContinueBotAndSteps is null!");
            }
            var contBotInGame = await _botInGameRepository.GetBotInGame(model.GameId);
            if (contBotInGame.Count == 0)
            {
                throw new NullReferenceException("contBotInGame is null!");
            }
            var contPlayerInGame = await _playerInGameRepository.GetPlayersInGame(model.GameId);
            if (contPlayerInGame.Count == 0)
            {
                throw new NullReferenceException("contPlayerInGame is null!");
            }
            var Game = await _gameRepository.GetById(model.GameId);
            if (Game == null)
            {
                throw new NullReferenceException("ContinueGame is null!");
            }

            _cardList = contCards;
            var playerCard = _cardList.ElementAt(0);
            _cardList.RemoveAt(0);

            var playerStep = new PlayerStep()
            {
                StepRank = playerCard.Rank,
                StepSuit = playerCard.Suit,
                GameId = model.GameId
            };

            var playerInGame = new PlayerInGame()
            {
                PlayerId = model.PlayerId,
                GameId = model.GameId,
                PlayerScore = CountingCards(playerCard.Rank)

            };

            var playerScoreDB = contPlayerInGame
                .Select(x => x.PlayerScore)
                .Sum();
            var playerScore = playerScoreDB += CountingCards(playerCard.Rank);

            var clearCards = await _cardRepository.GetCards(model.GameId);
            if (clearCards.Count == 0)
            {
                throw new NullReferenceException("Cards is empty!");
            }

            var cardForBots = new List<Card>();
            var botList = botAndSteps
                .Select(x => x.Bots)
                .Distinct()
                .ToList();
            CardForBots(botList, cardForBots);
            var botsSteps = new List<BotStep>();
            BotSteps(botList, cardForBots, null, botsSteps, model, null);

            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = model.GameId,
                    BotId = x.BotId,
                    BotScore = CountingCards(x.BotStepRank)

                })
                .ToList();

            var bots = contBotInGame
               .Select(x => x.Bots)
               .Distinct()
               .ToList();
            var groupedBotInGame = contBotInGame
                .GroupBy(x => x.BotId);
            var ScoredBotlIstDB = new List<BotInGame>();
            ScoredBotlIstDB.AddRange(botInGame);
            ScorePointFromDb(ScoredBotlIstDB, groupedBotInGame, model, null);
            var groupedBotsScore = ScoredBotlIstDB.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            RoundScore(botsScore, groupedBotsScore, model, null);

            CheckWinner(botsScore, bots, status, winner, playerScore, player, Game, model, null); // method of checking winner at continue game
            await _cardRepository.RemoveList(clearCards);
            var cardsOfGame = _cardList
                .Select(x => new Card()
                {
                    GameId = model.GameId,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();

            botAndSteps.AddRange(botsSteps);
            contPlayerStep.Add(playerStep);
            var continueGameModel = new ContinueGameView();
            continueGameModel.GameId = gameId;
            continueGameModel.Status = Game.Status;
            continueGameModel.Winner = Game.Winner;
            continueGameModel.PlayerId = player.Id;
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<ContinueGameBotsViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new ContinueGameBotsViewItem();
                var botName = botList.FirstOrDefault(x => x.Id == item.Key).BotName;
                bot.BotName = botName;
                bot.BotCards = item.Select(x => new ContinueGameCardsViewItem()
                {
                    StepRank = x.BotStepRank,
                    StepSuit = x.BotStepSuit
                })
                .ToList();

                botWithCards.Add(bot);
            }
            continueGameModel.Bots.AddRange(botWithCards);
            continueGameModel.PlayerName = player.Name;
            continueGameModel.PlayerCards = contPlayerStep
                .Select(x => new ContinueGameCardsViewItem()
                {
                    StepRank = x.StepRank,
                    StepSuit = x.StepSuit
                })
                .ToList();

            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
            await _botInGameRepository.AddList(botInGame);
            await _playerInGameRepository.Create(playerInGame);
            await _gameRepository.Update(Game);

            return continueGameModel;
        }
        public async Task<EndGameView> EndGame(EndGameView model)
        {
            var gameId = model.GameId;
            var status = Status.Continue.ToString();
            var winner = "No One";
            EndGameView endmodel = model;
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new NullReferenceException("Player is empty!");
            }
            var endCards = await _cardRepository.GetCards(model.GameId);
            if (endCards.Count == 0)
            {
                throw new NullReferenceException("Deck IN DB is empty!");
            }
            var endPlayerAndSteps = await _playerStepRepository.GetPlayerSteps(model.GameId);
            if (endPlayerAndSteps.Count == 0)
            {
                throw new NullReferenceException("endPlayerAndSteps is null!");
            }
            var botAndSteps = await _botStepRepository.GetStepsAndBot(model.GameId);
            if (botAndSteps.Count == 0)
            {
                throw new NullReferenceException("BotAndSteps is null!");
            }
            var endBotInGame = await _botInGameRepository.GetBotInGame(model.GameId);
            if (endBotInGame.Count == 0)
            {
                throw new NullReferenceException("endBotInGame is null!");
            }
            var endPlayerInGame = await _playerInGameRepository.GetPlayersInGame(model.GameId);
            if (endPlayerInGame.Count == 0)
            {
                throw new NullReferenceException("endPlayerInGame is null!");
            }
            var Game = await _gameRepository.GetById(model.GameId);
            if (Game == null)
            {
                throw new NullReferenceException("endGame is null!");
            }

            var playerScore = endPlayerInGame
                .Select(x => x.PlayerScore)
                .Sum();

            var bots = endBotInGame
                .Select(x => x.Bots)
                .Distinct()
                .ToList();

            var groupedBotInGame = endBotInGame.GroupBy(x => x.BotId);
            var ScoredBotlIstDB = new List<BotInGame>();
            ScorePointFromDb(ScoredBotlIstDB, groupedBotInGame, null, endmodel);

            var groupedBotsScore = ScoredBotlIstDB.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            RoundScore(botsScore, groupedBotsScore, null, endmodel);

            var maxBotScore = botsScore.Max(x => x.BotScore);
            if (maxBotScore < 17)
            {
                _cardList = endCards;
                var botList = botAndSteps
                  .Select(x => x.Bots)
                  .Distinct()
                  .ToList();
                var cardForBots = new List<Card>();
                CardForBots(botList, cardForBots);
                var botsSteps = new List<BotStep>();
                BotSteps(botList, cardForBots, null, botsSteps, null, endmodel);

                var botInGame = botsSteps
                    .Select(x => new BotInGame()
                    {
                        GameId = model.GameId,
                        BotId = x.BotId,
                        BotScore = CountingCards(x.BotStepRank)

                    })
                    .ToList();

                ScoredBotlIstDB.AddRange(botInGame);

                var clearCards = await _cardRepository.GetCards(model.GameId);
                if (clearCards.Count == 0)
                {
                    throw new NullReferenceException("Cards is null!");
                }
                await _cardRepository.RemoveList(clearCards);
                var cardsOfGame = _cardList
                    .Select(x => new Card()
                    {
                        GameId = model.GameId,
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                    .ToList();

                groupedBotsScore = ScoredBotlIstDB.GroupBy(x => x.BotId);
                botsScore = new List<BotInGame>();
                RoundScore(botsScore, groupedBotsScore, null, endmodel);

                await _botStepRepository.AddList(botsSteps);
                await _cardRepository.AddList(cardsOfGame);
                await _botInGameRepository.AddList(botInGame);
                botAndSteps.AddRange(botsSteps);
            }

            CheckWinner(botsScore, bots, status, winner, playerScore, player, Game, null, endmodel); // chose winner method 
            var endGameModel = new EndGameView();
            endGameModel.PlayerId = endmodel.PlayerId;
            endGameModel.GameId = endmodel.GameId;
            endGameModel.Status = Game.Status;
            endGameModel.Winner = Game.Winner;
            var groupedBotAndSteps = botAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<EndGameBotsViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new EndGameBotsViewItem();
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).BotName;
                bot.BotName = botName;
                bot.BotCards = item.Select(x => new EndGameCardsViewItem()
                {
                    StepRank = x.BotStepRank,
                    StepSuit = x.BotStepSuit
                })
                .ToList();

                botWithCards.Add(bot);
            }
            endGameModel.Bots.AddRange(botWithCards);
            endGameModel.PlayerName = player.Name;
            endGameModel.PlayerCards = endPlayerAndSteps
                .Select(x => new EndGameCardsViewItem()
                {
                    StepRank = x.StepRank,
                    StepSuit = x.StepSuit
                })
                .ToList();
            await _gameRepository.Update(Game);
            return endGameModel;
        }
        private void Shuffle()
        {
            _cardList = _cardList.OrderBy(o => Guid.NewGuid()).ToList();
        }//Shufle of deck
        private int CountingCards(CardRank rank)
        {
            int value = (int)rank;

            if ((int)rank >= 10 && 13 >= (int)rank)
            {
                value = 10;
            }
            return value;
        }//Cards value from Card type
        private enum Status
        {
            New,
            Continue,
            Blackjack,
            End,
            Busted,
            Winner,
            LoseAll,
            Draw
        }//All status uses
        private void CheckWinner(List<BotInGame> botsScore, List<Bot> bots, string status, string winner, int playerScore, Player player, Game Game, ContinueGameView model, EndGameView endmodel)
        {
            Guid GameId = new Guid();
            if (model != null)
            {
                GameId = model.GameId;
            }
            if (endmodel != null)
            {
                GameId = endmodel.GameId;
            }
            var groupBotScore = botsScore.GroupBy(x => x.BotId);
            var botScore = new List<BotInGame>();
            foreach (var item in groupBotScore)
            {
                var bot = new BotInGame();
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScore;
                    });

                var d = currentBotPoints;
                bot.BotScore = d;
                bot.BotId = item.Key;
                bot.GameId = GameId;
                botScore.Add(bot);
            }
            var groupedBotWinner = botScore.GroupBy(x => x.BotId);
            foreach (var item in groupBotScore)
            {
                var currentBot = bots.FirstOrDefault(x => x.Id == item.Key);

                var msmDel = botScore.Max(x => x.BotScore);
                if (msmDel > 21)
                {
                    var del = botScore.FirstOrDefault(x => x.BotScore == msmDel);
                    botScore.Remove(del);
                }
            }
            if (botScore.Count > 0)
            {
                var msm = botScore.Max(x => x.BotScore);
                var botWinner = botScore.FirstOrDefault(x => x.BotScore == msm);
                var profileWinnerBot = bots.FirstOrDefault(x => x.Id == botWinner.BotId);
                if (playerScore == msm && playerScore >= 20)
                {
                    status = Status.End.ToString();
                    winner = Status.Draw.ToString();
                    Game.Status = status;
                    Game.Winner = winner;
                }
                if (msm == 21 || playerScore > 21 && msm == 21)
                {
                    botWinner.BotScore = msm;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = GameId;
                    status = Status.Blackjack.ToString();
                    winner = profileWinnerBot.BotName;
                    Game.Status = status;
                    Game.Winner = winner;
                }
                if (playerScore > 21 || playerScore < msm && msm != 21 && model == null)
                {
                    botWinner.BotScore = msm;
                    botWinner.BotId = botWinner.BotId;
                    botWinner.GameId = GameId;
                    status = Status.End.ToString();
                    winner = profileWinnerBot.BotName;
                    Game.Status = status;
                    Game.Winner = winner;

                }
                if (playerScore > msm && model == null)
                {
                    status = Status.End.ToString();
                    winner = player.Name;
                    Game.Status = status;
                    Game.Winner = winner.ToString();
                }
            }
            if (playerScore < 21 && botScore.Count == 0)
            {
                status = Status.End.ToString();
                winner = player.Name;
                Game.Status = status;
                Game.Winner = winner.ToString();
            }
            if (playerScore > 21 && botScore.Count == 0)
            {
                status = Status.End.ToString();
                winner = Status.LoseAll.ToString();
            }
            if (playerScore == 21)
            {
                status = Status.Blackjack.ToString();
                winner = player.Name;
                Game.Status = status;
                Game.Winner = winner.ToString();
            }
            Game.Status = status;
            Game.Winner = winner;
        }//Check winner of rounds or game
        private void CardForBots(List<Bot> botList, List<Card> cardForBots)
        {
            for (var i = 0; i < botList.Count; i++)
            {
                var card = _cardList.ElementAt(0);
                _cardList.RemoveAt(0);
                cardForBots.Add(card);
            }

        } //Cards of round for bots 
        private void BotSteps(List<Bot> botList, List<Card> cardForBots, Game newGame, List<BotStep> botsSteps, ContinueGameView model, EndGameView endmodel)
        {
            Guid GameId = new Guid();
            if (newGame != null)
            {
                GameId = newGame.Id;
            }
            if (model != null)
            {
                GameId = model.GameId;
            }
            if (endmodel != null)
            {
                GameId = endmodel.GameId;
            }
            for (var i = 0; i < botList.Count; i++)
            {
                var st = new BotStep();
                st.BotId = botList[i].Id;
                st.BotStepRank = cardForBots[i].Rank;
                st.BotStepSuit = cardForBots[i].Suit;
                st.GameId = GameId;
                botsSteps.Add(st);
            }
        }// Apply cards of round for bots
        private void RoundScore(List<BotInGame> botsScore, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotsScore, ContinueGameView model, EndGameView endmodel)
        {
            Guid GameId = new Guid();
            if (model != null)
            {
                GameId = model.GameId;
            }
            if (endmodel != null)
            {
                GameId = endmodel.GameId;
            }
            foreach (var item in groupedBotsScore)
            {
                var ing = new BotInGame();
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScore;
                    });

                var d = currentBotPoints;

                ing.BotScore = d;
                ing.BotId = item.Key;
                ing.GameId = GameId;
                botsScore.Add(ing);
            }
        }// Score bots points of all cards
        private void ScorePointFromDb(List<BotInGame> ScoredBotlIstDB, IEnumerable<IGrouping<Guid, BotInGame>> groupedBotInGame, ContinueGameView model, EndGameView endmodel)
        {
            Guid GameId = new Guid();
            if (model != null)
            {
                GameId = model.GameId;
            }
            if (endmodel != null)
            {
                GameId = endmodel.GameId;
            }
            foreach (var item in groupedBotInGame)
            {
                var ing = new BotInGame();

                //var currentBotStepRanks = item.Select(x => x.BotStepRank).ToList();
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScore;
                    });

                var d = currentBotPoints;
                ing.BotScore = d;
                ing.BotId = item.Key;
                ing.GameId = GameId;
                ScoredBotlIstDB.Add(ing);
            }

        } // Score bots points from DB
    }
}
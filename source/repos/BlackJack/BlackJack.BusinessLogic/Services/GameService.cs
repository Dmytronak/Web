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

      

        public async Task CreateNewPlayer(CreatePlayerGameView model)
        {
            var appUser = _userManager.FindByEmailAsync(model.Email);

            if (model.Name == null)
            {
                throw new ArgumentNullException("Model received a null argument!");
            }
            var newPlayer = new Player()
            {
                Name = model.Name,
                UserId = Guid.Parse(appUser.Result.Id)
            };
            await _playerRepository.Create(newPlayer);
        }
        public async Task<GetPlayersGameView> GetAllPlayersByUser(Guid UserId)
        {
            if (UserId == null)
            {
                throw new ArgumentNullException("UserId received a null argument!");
            }
            var players = await _playerRepository.GetPlayers(UserId);
            var result = new GetPlayersGameView();
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
            var numbOfBots = model.NumberOfBots;
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new ArgumentNullException("player is empty!");
            }
            var bots = await _botRepository.GetAll();
            if (bots == null)
            {
                throw new ArgumentNullException("bots is empty!");
            }


            var botRandomList = bots
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
            for (var i = 0; i < model.NumberOfBots; i++)
            {
                var card = _cardList.ElementAt(0);
                _cardList.RemoveAt(0);
                cardForBots.Add(card);
            }
            var botsSteps = new List<BotStep>();
            for (var i = 0; i < botRandomList.Count; i++)
            {
                var st = new BotStep();
                st.BotId = botRandomList[i].Id;
                st.BotStepRank = cardForBots[i].Rank;
                st.BotStepSuit = cardForBots[i].Suit;
                st.GameId = newGame.Id;
                botsSteps.Add(st);
            }
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
                PlayerScoreValue = CountingCards(playerCard.Rank)
            };

            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = newGame.Id,
                    BotId = x.BotId,
                    BotScoreValue = CountingCards(x.BotStepRank)

                })
                .ToList();

            var playGameModel = new PlayGameView();
            playGameModel.PlayerId = player.Id;
            playGameModel.NumberOfBots = numbOfBots;
            playGameModel.GameId = newGame.Id;
            playGameModel.PlayerName = player.Name;
            playGameModel.StepRank = playerCard.Rank.ToString();
            playGameModel.StepSuit = playerCard.Suit.ToString();

            var groupedBotInGame = botsSteps.GroupBy(x => x.BotId);
            var playGameBots = new List<PlayGameBotsViewItem>();
            foreach (var item in groupedBotInGame)
            {
                var modelItem = new PlayGameBotsViewItem();

                var currentBot = botRandomList.FirstOrDefault(x => x.Id == item.Key).BotName;
                modelItem.BotName = currentBot;
                modelItem.PlayBotCards = item.Select(x => new PlayGameBotCardsViewItem()
                {
                    BotStepRank = x.BotStepRank.ToString(),
                    BotStepSuit = x.BotStepSuit.ToString()
                })
                .ToList();

                playGameBots.Add(modelItem);
            }
            playGameModel.PlayGameBots.AddRange(playGameBots);

            
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
                throw new ArgumentNullException("player is empty!");
            }
            var contCards = await _cardRepository.GetCards(model.GameId);
            if (contCards == null)
            {
                throw new ArgumentNullException("Deck IN DB is empty!");
            }
            var contPlayerStep = await _playerStepRepository.GetPlayerSteps(model.GameId);
            if (contPlayerStep == null)
            {
                throw new ArgumentNullException("PlayerStep is null!");
            }
            var contBotAndSteps = await _botStepRepository.GetStepsAndBot(model.GameId);
            if (contBotAndSteps == null)
            {
                throw new ArgumentNullException("ContinueBotAndSteps is null!");
            }
            var contBotInGame = await _botInGameRepository.GetBotInGame(model.GameId);
            if (contBotInGame == null)
            {
                throw new ArgumentNullException("contBotInGame is null!");
            }
            var contPlayerInGame = await _playerInGameRepository.GetPlayersInGame(model.GameId);
            if (contPlayerInGame == null)
            {
                throw new ArgumentNullException("contPlayerInGame is null!");
            }
            var Game = await _gameRepository.GetById(model.GameId);
            if (Game == null)
            {
                throw new ArgumentNullException("ContinueGame is null!");
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
                PlayerScoreValue = CountingCards(playerCard.Rank)

            };

            var playerScoreDB = contPlayerInGame
                .Select(x => x.PlayerScoreValue)
                .Sum();
            var playerScore = playerScoreDB += CountingCards(playerCard.Rank);

            var clearCards = await _cardRepository.GetCards(model.GameId);
            if (clearCards == null)
            {
                throw new ArgumentNullException("ContinueBotAndSteps is null!");
            }
            if (playerScore == 21)
            {
                IfBlackJack(status, winner, player, Game);
                await _playerStepRepository.Create(playerStep);
                await _cardRepository.RemoveList(clearCards);
                await _cardRepository.AddList(_cardList);
                await _playerInGameRepository.Create(playerInGame);
                await _gameRepository.Update(Game);
            }


            var cardForBots = new List<Card>();
            var contBots = contBotAndSteps
                .Select(x => x.Bots)
                .Distinct()
                .ToList();

            for (var i = 0; i < contBots.Count; i++)
            {
                var card = _cardList.ElementAt(0);
                _cardList.RemoveAt(0);
                cardForBots.Add(card);
            }
            var botsSteps = new List<BotStep>();
            for (var i = 0; i < contBots.Count; i++)
            {
                var st = new BotStep();
                st.BotId = contBots[i].Id;
                st.BotStepRank = cardForBots[i].Rank;
                st.BotStepSuit = cardForBots[i].Suit;
                st.GameId = model.GameId;
                botsSteps.Add(st);
            }
            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = model.GameId,
                    BotId = x.BotId,
                    BotScoreValue = CountingCards(x.BotStepRank)

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
            foreach (var item in groupedBotInGame)
            {
                var ing = new BotInGame();

                //var currentBotStepRanks = item.Select(x => x.BotStepRank).ToList();
                var currentBot = bots
                    .FirstOrDefault(x => x.Id == item.Key);
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });

                var d = currentBotPoints;
                ing.BotScoreValue = d;
                ing.BotId = item.Key;
                ing.GameId = model.GameId;
                ScoredBotlIstDB.Add(ing);
            }

            var groupedBotsScore = ScoredBotlIstDB.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            foreach (var item in groupedBotsScore)
            {
                var ing = new BotInGame();
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });

                var d = currentBotPoints;

                ing.BotScoreValue = d;
                ing.BotId = item.Key;
                ing.GameId = model.GameId;
                botsScore.Add(ing);
            }

            CheckWinner(botsScore, bots, status, winner, playerScore, player, Game, model, null);

            await _cardRepository.RemoveList(clearCards);
            var cardsOfGame = _cardList
                .Select(x => new Card()
                {
                    GameId = model.GameId,
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList();



            var continueGameModel = new ContinueGameView();
            contBotAndSteps.AddRange(botsSteps);
            contPlayerStep.Add(playerStep);
            continueGameModel.GameId = gameId;
            continueGameModel.Status = Game.Status;
            continueGameModel.Winner = Game.Winner;
            continueGameModel.PlayerId = player.Id;
            var groupedBotAndSteps = contBotAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<ContinueGameBotsViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new ContinueGameBotsViewItem();
                var botName = contBots.FirstOrDefault(x => x.Id == item.Key).BotName;
                bot.BotName = botName;
                bot.ContinueBotCards = item.Select(x => new ContinueGameBotCardsViewItem()
                {
                    BotStepRank = x.BotStepRank.ToString(),
                    BotStepSuit = x.BotStepSuit.ToString()
                })
                .ToList();

                botWithCards.Add(bot);
            }
            continueGameModel.ContinueGameBots.AddRange(botWithCards);
            continueGameModel.PlayerName = player.Name;
            continueGameModel.ContinueGamePlayerCards = contPlayerStep
                .Select(x => new ContinueGamePlayerCardsViewItem()
                {
                    StepRank = x.StepRank.ToString(),
                    StepSuit = x.StepSuit.ToString()
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
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new ArgumentNullException("Player is empty!");
            }
            var endCards = await _cardRepository.GetCards(model.GameId);
            if (endCards == null)
            {
                throw new ArgumentNullException("Deck IN DB is empty!");
            }
            var endPlayerAndSteps = await _playerStepRepository.GetPlayerSteps(model.GameId);
            if (endPlayerAndSteps == null)
            {
                throw new ArgumentNullException("endPlayerAndSteps is null!");
            }
            var endBotAndSteps = await _botStepRepository.GetStepsAndBot(model.GameId);
            if (endBotAndSteps == null)
            {
                throw new ArgumentNullException("BotAndSteps is null!");
            }
            var endBotInGame = await _botInGameRepository.GetBotInGame(model.GameId);
            if (endBotInGame == null)
            {
                throw new ArgumentNullException("endBotInGame is null!");
            }
            var endPlayerInGame = await _playerInGameRepository.GetPlayersInGame(model.GameId);
            if (endPlayerInGame == null)
            {
                throw new ArgumentNullException("endPlayerInGame is null!");
            }
            var Game = await _gameRepository.GetById(model.GameId);
            if (Game == null)
            {
                throw new ArgumentNullException("endGame is null!");
            }

            var playerScore = endPlayerInGame
                .Select(x => x.PlayerScoreValue)
                .Sum();

            if (playerScore == 21)
            {
                IfBlackJack(winner, status, player, Game);
                await _gameRepository.Update(Game);
            }

            var bots = endBotInGame
                .Select(x => x.Bots)
                .Distinct()
                .ToList();

            var groupedBotInGame = endBotInGame.GroupBy(x => x.BotId);

            var ScoredBotlIstDB = new List<BotInGame>();
            foreach (var item in groupedBotInGame)
            {
                var ing = new BotInGame();
                var currentBot = bots
                    .FirstOrDefault(x => x.Id == item.Key);
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });
                var d = currentBotPoints;
                ing.BotScoreValue = d;
                ing.BotId = item.Key;
                ing.GameId = model.GameId;
                ScoredBotlIstDB.Add(ing);
            }

            var groupedBotsScore = ScoredBotlIstDB.GroupBy(x => x.BotId);
            var botsScore = new List<BotInGame>();
            foreach (var item in groupedBotsScore)
            {
                var ing = new BotInGame();
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });

                var d = currentBotPoints;

                ing.BotScoreValue = d;
                ing.BotId = item.Key;
                ing.GameId = model.GameId;
                botsScore.Add(ing);
            }

            var maxBotScore = botsScore.Max(x => x.BotScoreValue);
            if (maxBotScore < 17)
            {
                _cardList = endCards;
                var cardForBots = new List<Card>();
                var contBots = endBotAndSteps
                    .Select(x => x.Bots)
                    .Distinct()
                    .ToList();
                for (var i = 0; i < contBots.Count; i++)
                {
                    var card = _cardList.ElementAt(0);
                    _cardList.RemoveAt(0);
                    cardForBots.Add(card);
                }

                var botsSteps = new List<BotStep>();
                for (var i = 0; i < contBots.Count; i++)
                {
                    var st = new BotStep();
                    st.BotId = contBots[i].Id;
                    st.BotStepRank = cardForBots[i].Rank;
                    st.BotStepSuit = cardForBots[i].Suit;
                    st.GameId = model.GameId;
                    botsSteps.Add(st);
                }

                var botInGame = botsSteps
                    .Select(x => new BotInGame()
                    {
                        GameId = model.GameId,
                        BotId = x.BotId,
                        BotScoreValue = CountingCards(x.BotStepRank)

                    })
                    .ToList();

                ScoredBotlIstDB.AddRange(botInGame);

                var clearCards = await _cardRepository.GetCards(model.GameId);
                if (clearCards == null)
                {
                    throw new ArgumentNullException("Cards is null!");
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
                foreach (var item in groupedBotsScore)
                {
                    var ing = new BotInGame();
                    var currentBotPoints = 0;

                    item.ToList()
                        .ForEach(x =>
                        {
                            currentBotPoints += x.BotScoreValue;
                        });

                    var d = currentBotPoints;

                    ing.BotScoreValue = d;
                    ing.BotId = item.Key;
                    ing.GameId = model.GameId;
                    botsScore.Add(ing);
                }

                await _botStepRepository.AddList(botsSteps);
                await _cardRepository.AddList(cardsOfGame);
                await _botInGameRepository.AddList(botInGame);
                endBotAndSteps.AddRange(botsSteps);
            }

            EndGameView endmodel = model;
            CheckWinner(botsScore, bots, status, winner, playerScore, player, Game, null, endmodel);

            var endGameModel = new EndGameView();
            endGameModel.PlayerId = endmodel.PlayerId;
            endGameModel.GameId = endmodel.GameId;
            endGameModel.Status = Game.Status;
            endGameModel.Winner = Game.Winner;

            var groupedBotAndSteps = endBotAndSteps.GroupBy(x => x.BotId);
            var botWithCards = new List<EndGameBotsViewItem>();
            foreach (var item in groupedBotAndSteps)
            {
                var bot = new EndGameBotsViewItem();
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).BotName;
                bot.BotName = botName;
                bot.ContinueBotCards = item.Select(x => new EndGameBotCardsViewItem()
                {
                    BotStepRank = x.BotStepRank.ToString(),
                    BotStepSuit = x.BotStepSuit.ToString()
                })
                .ToList();

                botWithCards.Add(bot);
            }
            endGameModel.EndGameBots.AddRange(botWithCards);

            endGameModel.PlayerName = player.Name;
            endGameModel.EndGamePlayerCards = endPlayerAndSteps
                .Select(x => new EndGamePlayerCardsViewItem()
                {
                    StepRank = x.StepRank.ToString(),
                    StepSuit = x.StepSuit.ToString()
                })
                .ToList();
            await _gameRepository.Update(Game);

            return endGameModel;
        }
        public virtual void Shuffle()
        {
            _cardList = _cardList.OrderBy(o => Guid.NewGuid()).ToList();
        }
        public int CountingCards(CardRank rank)
        {
            int value = (int)rank;

            if ((int)rank >= 10 && 13 >= (int)rank)
            {
                value = 10;
            }
            return value;
        }
        public enum Status
        {
            New,
            Continue,
            Blackjack,
            End,
            Busted,
            Winner,
            LoseAll,
            Draw
        }
        public void IfBlackJack(string status, string winner, Player player, Game Game)
        {
            status = Status.Blackjack.ToString();
            winner = player.Name;
            Game.Status = status;
            Game.Winner = winner.ToString();
        }
        public void CheckWinner(List<BotInGame> botsScore, List<Bot> bots, string status, string winner, int playerScore, Player player, Game Game, ContinueGameView model, EndGameView endmodel)
        {
            var groupBotWinner = botsScore.GroupBy(x => x.BotId);
            var botWinner = new BotInGame();
            foreach (var item in groupBotWinner)
            {
                var currentBot = bots.FirstOrDefault(x => x.Id == item.Key);
                var msm = botsScore.Max(x => x.BotScoreValue);
                var msmin = botsScore.Min(x => x.BotScoreValue);
                var currentBotPoints = 0;
                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });

                var d = currentBotPoints;

                if (playerScore > 21 || msm == 21 || msmin == 21)
                {
                    if (msmin > 21)
                    {
                        status = Status.End.ToString();
                        winner = Status.LoseAll.ToString();
                        Game.Status = status;
                        Game.Winner = winner.ToString();
                        break;

                    }
                    if (msm == d && msm == 21 || msmin == d && msmin == 21)
                    {
                        botWinner.BotScoreValue = d;
                        botWinner.BotId = item.Key;
                        botWinner.GameId = model.GameId;
                        status = Status.Blackjack.ToString();
                        winner = currentBot.BotName;
                        Game.Status = status;
                        Game.Winner = winner;
                        break;
                    }
                    if (msm == d && msm < 21 || msm > 21 && msmin < 21 && msmin == d)
                    {
                        botWinner.BotScoreValue = d;
                        botWinner.BotId = item.Key;
                        botWinner.GameId = model.GameId;
                        status = Status.End.ToString();
                        winner = currentBot.BotName;
                        Game.Status = status;
                        Game.Winner = winner;
                        break;
                    }
                }
                if (playerScore < 21 & model == null || msmin > 21)
                {
                    if (msmin > 21 || playerScore > msm && msm < 21 || playerScore > msmin && msmin < 21 && msm > 21 || msmin > 21 && playerScore > 21)
                    {
                        status = Status.End.ToString();
                        winner = player.Name;
                        Game.Status = status;
                        Game.Winner = winner.ToString();
                        break;

                    }
                    if (msm == d && msm < 21 && playerScore < 21 && playerScore < msm || msmin == d && msm > 21 && msmin < 21 && playerScore < msmin)
                    {
                        botWinner.BotScoreValue = d;
                        botWinner.BotId = item.Key;
                        botWinner.GameId = endmodel.GameId;
                        status = Status.End.ToString();
                        winner = currentBot.BotName;
                        Game.Status = status;
                        Game.Winner = winner;
                        break;
                    }
                    if (msmin == d && msm > 21 && msmin < 21 && playerScore == msmin)
                    {
                        botWinner.BotScoreValue = d;
                        botWinner.BotId = item.Key;
                        botWinner.GameId = endmodel.GameId;
                        status = Status.End.ToString();
                        winner = Status.Draw.ToString();
                        Game.Status = status;
                        Game.Winner = winner;
                        break;
                    }
                }
                Game.Status = status;
                Game.Winner = winner;
            }
        }

    }
}
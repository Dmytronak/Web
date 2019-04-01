using System;
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
        protected readonly IPlayerInGameRepository  _playerInGameRepository;
        protected List<Card> _cardList;

        public GameService(UserManager<User> userManager, IGameRepository gameRepository, IPlayerRepository playerRepository, IBotRepository botRepository, IPlayerStepRepository playerStepRepository,
            IBotStepRepository botStepRepository, ICardRepository cardRepository, IPlayerInGameRepository playerInGameRepository,IBotInGameRepository botInGameRepository)
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

        public async Task CreateNewPlayer(CreatePlayerGameModel model)
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

        public async Task PlayGame(PlayGameModel model)
        {
            List<Bot> botNamesList = new List<Bot>();
            botNamesList.Add(new Bot() { BotName = "Criss" });
            botNamesList.Add(new Bot() { BotName = "Shon" });
            botNamesList.Add(new Bot() { BotName = "Dionne" });
            botNamesList.Add(new Bot() { BotName = "Nathanial" });
            botNamesList.Add(new Bot() { BotName = "Klara" });
            botNamesList.Add(new Bot() { BotName = "Jeremiah" });
            botNamesList.Add(new Bot() { BotName = "Scotty" });
            botNamesList.Add(new Bot() { BotName = "Dmitriy" });
            var botRandomList = botNamesList
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
            for(var i = 0; i < botRandomList.Count; i++)
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
                PlayerScoreValue = (int)playerCard.Rank
            };

            var botInGame = botsSteps
                .Select(x => new BotInGame()
                {
                    GameId = newGame.Id,
                    BotId = x.BotId,
                    BotScoreValue = (int)x.BotStepRank
                   
                })
                .ToList();

            await _botRepository.AddList(botRandomList);
            await _gameRepository.Create(newGame);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
            await _playerInGameRepository.Create(playerInGame);
            await _botInGameRepository.AddList(botInGame);
        }

        public async Task ContinueGame(ContinueGameModel model)
        {
            var status = Status.Continue.ToString();
            var winner = "";
            var player = await _playerRepository.GetById(model.PlayerId);
            if (player == null)
            {
                throw new ArgumentNullException("player is empty!");
            }
            var contCards = await _cardRepository.GetByGameId(model.GameId);
            if (contCards == null)
            {
                throw new ArgumentNullException("Deck IN DB is empty!");
            }
            var contPlayerStep = await _playerStepRepository.GetByGameId(model.GameId);
            if (contPlayerStep == null)
            {
                throw new ArgumentNullException("PlayerStep is null!");
            }
            var contBotAndSteps = await _botStepRepository.GetStepsAndBotByGameId(model.GameId);
            if (contBotAndSteps == null)
            {
                throw new ArgumentNullException("ContinueBotAndSteps is null!");
            }
            var contBotInGame = await _botInGameRepository.GetBotInGameByGameId(model.GameId);
            if (contBotInGame == null)
            {
                throw new ArgumentNullException("contBotInGame is null!");
            }
            var contPlayerInGame = await _playerInGameRepository.GetByGameId(model.GameId);
            if (contPlayerInGame == null)
            {
                throw new ArgumentNullException("contPlayerInGame is null!");
            }
            var contGame = await _gameRepository.GetById(model.GameId);
            if (contGame == null)
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
                PlayerScoreValue = (int)playerCard.Rank
            };

            var playerScoreDB = contPlayerInGame
            .Select(x => x.PlayerScoreValue)
            .Sum();

            var playerScore = playerScoreDB += (int)playerCard.Rank;

            var clearCards = await _cardRepository.GetByGameId(model.GameId);
            if (clearCards == null)
            {
                throw new ArgumentNullException("ContinueBotAndSteps is null!");
            }
            if (playerScore == 21)
            {
                status = Status.Blackjack.ToString();
                winner = player.Name;
                contGame.Status = status;
                contGame.Winner = winner.ToString();

                await _playerStepRepository.Create(playerStep);
                await _cardRepository.RemoveList(clearCards);
                await _cardRepository.AddList(_cardList);
                await _playerInGameRepository.Create(playerInGame);
                await _gameRepository.Update(contGame);
                throw new ArgumentNullException("BLACKJACK! END GAME YOU WIN");
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
                    BotScoreValue = (int)x.BotStepRank

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

            var groupBotWinner = botsScore.GroupBy(x => x.BotId);

            var botWinner = new BotInGame();
            foreach (var item in groupBotWinner)
            {
                var currentBot = bots
                   .FirstOrDefault(x => x.Id == item.Key);
                var msm = botsScore
                    .Max(x=>x.BotScoreValue);
                var msmin = botsScore
                   .Min(x => x.BotScoreValue);
                var currentBotPoints = 0;

                item.ToList()
                    .ForEach(x =>
                    {
                        currentBotPoints += x.BotScoreValue;
                    });

                var d = currentBotPoints;

                if (msmin > 21)
                {

                    status = Status.End.ToString();
                    winner = player.Name;

                    contGame.Status = status;
                    contGame.Winner = winner.ToString();

                

                }
                if (msmin > 21 && playerScore>21)
                {
                    status = Status.End.ToString();
                    winner = Status.Lose_All.ToString();
                    contGame.Status = status;
                    contGame.Winner = winner;

                   
                }
                if (msm == d && msm == 21)
                {

                    botWinner.BotScoreValue = d;
                    botWinner.BotId = item.Key;
                    botWinner.GameId = model.GameId;
                    status = Status.Blackjack.ToString();
                    winner = currentBot.BotName;
                    contGame.Status = status;
                    contGame.Winner = winner;
                  
                }
                if (msm == d && msm < 21 && playerScore > 21)
                {
                    
                    botWinner.BotScoreValue = d;
                    botWinner.BotId = item.Key;
                    botWinner.GameId = model.GameId;
                    status = Status.End.ToString();
                    winner = currentBot.BotName;
                    contGame.Status = status;
                    contGame.Winner = winner;
                 
                }

                if (msm >21 && msmin < 21 && playerScore > 21)
                {

                    botWinner.BotScoreValue = d;
                    botWinner.BotId = item.Key;
                    botWinner.GameId = model.GameId;
                    status = Status.End.ToString();
                    winner = currentBot.BotName;
                    contGame.Status = status;
                    contGame.Winner = winner;
                    
                }

                contGame.Status = status;
                contGame.Winner = winner;

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

            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
            await _botInGameRepository.AddList(botInGame);
            await _playerInGameRepository.Create(playerInGame);
            await _gameRepository.Update(contGame);

        }

        public async Task EndGame(EndGameModel model)
        {

            var endPlayerStep = await _playerStepRepository.GetByGameId(model.GameId);
            if (endPlayerStep == null)
            {
                throw new ArgumentNullException("PlayerStep is null!");
            }
            var endBotStepsAndBots = await _botStepRepository.GetStepsAndBotByGameId(model.GameId);

            if (endBotStepsAndBots == null)
            {
                throw new ArgumentNullException("BotSteps is null!");
            }

            var PlCCount = new List<CardRank>();
            PlCCount
                .Select(x => x)
                .Sum(x => (int)x);

            for (int i = 0; i < endPlayerStep.Count; i++)
            {
                var val = endPlayerStep[i].StepRank;
                PlCCount.Add(val);
            }
            // PlCCount VALUE CALCUL

            var bots = endBotStepsAndBots
                .Select(x => x.Bots)
                .Distinct()
                .ToList();

            var groupedBotSteps = endBotStepsAndBots.GroupBy(x => x.BotId);

            foreach (var item in groupedBotSteps)
            {
                //var currentBotStepRanks = item.Select(x => x.BotStepRank).ToList();
                var currentBot = bots.FirstOrDefault(x => x.Id == item.Key);
                var currentBotPoints = 0;
                item.ToList().ForEach(x =>
                {
                    currentBotPoints += (int) x.BotStepRank;
                });
            }

        }
        public virtual void Shuffle()
        {
            _cardList = _cardList.OrderBy(o => Guid.NewGuid()).ToList();
        }
        public enum Status
        {
            New,
            Continue,
            Blackjack,
            End,
            Busted,
            Winner,
            Lose_All
        }
    }
}


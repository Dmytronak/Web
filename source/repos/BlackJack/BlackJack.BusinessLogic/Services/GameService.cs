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
        protected List<Card> _cardList;

        public GameService(UserManager<User> userManager, IGameRepository gameRepository, IPlayerRepository playerRepository,
            IBotRepository botRepository, IPlayerStepRepository playerStepRepository, IBotStepRepository botStepRepository, ICardRepository cardRepository)
        {
            _userManager = userManager;
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _botRepository = botRepository;
            _playerStepRepository = playerStepRepository;
            _botStepRepository = botStepRepository;
            _cardRepository = cardRepository;
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
            var player = await _playerRepository.GetById(model.PlayerId);

            List<Bot> botNamesList = new List<Bot>();
            botNamesList.Add(new Bot() { BotName = "Criss" });
            botNamesList.Add(new Bot() { BotName = "Shon" });
            botNamesList.Add(new Bot() { BotName = "Dionne" });
            botNamesList.Add(new Bot() { BotName = "Nathanial" });
            botNamesList.Add(new Bot() { BotName = "Klara" });
            botNamesList.Add(new Bot() { BotName = "Jeremiah" });
            botNamesList.Add(new Bot() { BotName = "Scotty" });
            botNamesList.Add(new Bot() { BotName = "Dmitriy" });
            var botRandomList = botNamesList.OrderBy(r => Guid.NewGuid()).Take(model.NumberOfBots).ToList();

            var ranks = Enum.GetValues(typeof(CardRank)).Cast<CardRank>().ToList();
            var suits = Enum.GetValues(typeof(CardSuit)).Cast<CardSuit>().ToList();
          
            var newGame = new Game()
            {
                NumberOfBots = model.NumberOfBots,
                Status = Status.New.ToString(),
                PlayerId = player.Id,
            };

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
               StepRank = playerCard.Rank.ToString(),
               StepSuit = playerCard.Suit.ToString(),
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
                st.BotStepRank = cardForBots[i].Rank.ToString();
                st.BotStepSuit = cardForBots[i].Suit.ToString();
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

            await _gameRepository.Create(newGame);
            await _botRepository.AddList(botRandomList);
            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
        }

        public async Task ContinueGame(ContinueGameModel model)
        {
            var contCards = await _cardRepository.GetByGameId(model.GameId);
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

            _cardList = contCards ?? throw new ArgumentNullException("Deck IN DB is empty!");
            var playerCard = _cardList.ElementAt(0);
            _cardList.RemoveAt(0);

            var playerStep = new PlayerStep()
            {
                StepRank = playerCard.Rank.ToString(),
                StepSuit = playerCard.Suit.ToString(),
                GameId = model.GameId
            };

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
                st.BotStepRank = cardForBots[i].Rank.ToString();
                st.BotStepSuit = cardForBots[i].Suit.ToString();
                st.GameId = model.GameId;
                botsSteps.Add(st);
            }

            var clearCards = await _cardRepository.GetByGameId(model.GameId);
            if (clearCards == null)
            {
                throw new ArgumentNullException("ContinueBotAndSteps is null!");
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

            var contGameFromDb = await _gameRepository.GetById(model.GameId);
            if (contGameFromDb == null)
            {
                throw new ArgumentNullException("Game received a null argument!");
            }
            contGameFromDb.Status = Status.Continue.ToString();
            contGameFromDb.PlayerId = model.PlayerId;

            await _playerStepRepository.Create(playerStep);
            await _botStepRepository.AddList(botsSteps);
            await _cardRepository.AddList(cardsOfGame);
            await _gameRepository.Update(contGameFromDb);

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

            var PlCCount = new List<int>();
            for (int i = 0; i < endPlayerStep.Count; i++)
            {
                var val = PlayerCardValue(endPlayerStep[i]);
                PlCCount.Add(val);
            }
            var PlCValue = PlCCount.Sum();

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
                    currentBotPoints += BotCardValue(x);
                });
            }

        }
        public int PlayerCardValue(PlayerStep card)
        {
            int value = 0;
            if (card.StepRank == "Ace")
            {
                value = 1;
            }
            if (card.StepRank == "Two")
            {
                value = 2;
            }
            if (card.StepRank == "Three")
            {
                value = 3;
            }
            if (card.StepRank == "Four")
            {
                value = 4;
            }
            if (card.StepRank == "Five")
            {
                value = 5;
            }
            if (card.StepRank == "Six")
            {
                value = 6;
            }
            if (card.StepRank == "Seven")
            {
                value = 7;
            }
            if (card.StepRank == "Eight")
            {
                value = 8;
            }
            if (card.StepRank == "Nine")
            {
                value = 9;
            }
            if (card.StepRank == "Ten")
            {
                value = 10;
            }
            if (card.StepRank == "Jack")
            {
                value = 10;
            }
            if (card.StepRank == "Queen")
            {
                value = 10;
            }
            if (card.StepRank == "King")
            {
                value = 10;
            }

            return value;
        }
        public int BotCardValue(BotStep card)
        {
            int value = 0;
            if (card.BotStepRank == "Ace")
            {
                value = 1;
            }
            if (card.BotStepRank == "Two")
            {
                value = 2;
            }
            if (card.BotStepRank == "Three")
            {
                value = 3;
            }
            if (card.BotStepRank == "Four")
            {
                value = 4;
            }
            if (card.BotStepRank == "Five")
            {
                value = 5;
            }
            if (card.BotStepRank == "Six")
            {
                value = 6;
            }
            if (card.BotStepRank == "Seven")
            {
                value = 7;
            }
            if (card.BotStepRank == "Eight")
            {
                value = 8;
            }
            if (card.BotStepRank == "Nine")
            {
                value = 9;
            }
            if (card.BotStepRank == "Ten")
            {
                value = 10;
            }
            if (card.BotStepRank == "Jack")
            {
                value = 10;
            }
            if (card.BotStepRank == "Queen")
            {
                value = 10;
            }
            if (card.BotStepRank == "King")
            {
                value = 10;
            }

            return value;
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
        }
    }
}


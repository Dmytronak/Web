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
        protected  List<Card> _cardList;
       

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
            var player = await _playerRepository.GetById(model.CurrentPlayerId);

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
               StepSuit = playerCard.Suit.ToString()
            };
           

            var newGame = new Game()
            {
               Status = Status.New.ToString(),
               NumberOfBots = model.NumberOfBots,
               PlayerId = player.Id,
               PlayerStepId = playerStep.Id
            };

            var cardForBots = new List<Card>();

            for (var count = 0; count < model.NumberOfBots; count++)
            {
                var card = _cardList.ElementAt(0);
                _cardList.RemoveAt(0);
                cardForBots.Add(card); 
            }

            //var cardsForBots1 = _cardList.OrderBy(r => Guid.NewGuid()).Take(model.NumberOfBots).ToList();

            var botSteps = new List<BotStep>();
            for(var count = 0; count < botRandomList.Count; count++)
            {
                var st = new BotStep();
                st.BotId = botRandomList[count].Id;
                st.BotStepRank = cardForBots[count].Rank.ToString();
                st.BotStepSuit = cardForBots[count].Suit.ToString();
                st.GameId = newGame.Id;
                botSteps.Add(st);
            }

            var cardsOfGame = _cardList.Select(x => new Card()
            {
                GameId = newGame.Id,
                Rank = x.Rank,
                Suit = x.Suit
            }).ToList();

            await _botRepository.AddList(botRandomList);
            await _playerStepRepository.Create(playerStep);
            await _gameRepository.Create(newGame);
            await _botStepRepository.AddList(botSteps);
            await _cardRepository.AddList(cardsOfGame);
        }

        public async Task ContinueGame(ContinueGameModel model)
        {
            var gameFromDb = _gameRepository.GetById(model.GameId);







        }









        public int CardValue(Card card)
        {
            int value=0;
            if (card.Rank.ToString() == "Ace")
            {
                value = 1;
            }
            if (card.Rank.ToString() == "Two")
            {
                value = 2;
            }
            if (card.Rank.ToString() == "Three")
            {
                value = 3;
            }
            if (card.Rank.ToString() == "Four")
            {
                value = 4;
            }
            if (card.Rank.ToString() == "Five")
            {
                value = 5;
            }
            if (card.Rank.ToString() == "Six")
            {
                value = 6;
            }
            if (card.Rank.ToString() == "Seven")
            {
                value = 7;
            }
            if (card.Rank.ToString() == "Eight")
            {
                value = 8;
            }
            if (card.Rank.ToString() == "Nine")
            {
                value = 9;
            }
            if (card.Rank.ToString() == "Ten")
            {
                value = 10;
            }
            if (card.Rank.ToString() == "Jack")
            {
                value = 10;
            }
            if (card.Rank.ToString() == "Queen")
            {
                value = 10;
            }
            if (card.Rank.ToString() == "King")
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


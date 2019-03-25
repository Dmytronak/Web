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
            var statusNew = "New game";
            var statusEnd = "End game";
            var statusContinue = "Continue game";
            var playerId = await _playerRepository.GetById(model.CurrentPlayerId);

            List<Bot> botNamesList = new List<Bot>();
            botNamesList.Add(new Bot() { BotName = "Criss" });
            botNamesList.Add(new Bot() { BotName = "Shon" });
            botNamesList.Add(new Bot() { BotName = "Dionne" });
            botNamesList.Add(new Bot() { BotName = "Nathanial" });
            botNamesList.Add(new Bot() { BotName = "Klara" });
            botNamesList.Add(new Bot() { BotName = "Jeremiah" });
            botNamesList.Add(new Bot() { BotName = "Scotty" });
            botNamesList.Add(new Bot() { BotName = "Dmitriy" });
            var botRandomList = botNamesList.OrderBy(r => Guid.NewGuid()).Take(model.NumberOfBots);
            await _botRepository.AddList(botRandomList);

            var ranks = Enum.GetValues(typeof(CardRank)).Cast<CardRank>().ToList();
            var suits = Enum.GetValues(typeof(CardSuit)).Cast<CardSuit>().ToList();

             //List<Card> cardsValues = (from suit in suits
             //                    from rank in ranks
             //                    select new Card(rank,suit)
             //).ToList();

            List<Card> cardsOnDeckList = suits
                .SelectMany(s => ranks
                                    .Select(c => new Card()
                                    {
                                        Suit = (CardSuit)s,
                                        Rank = (CardRank)c
                                    }))
                .ToList();

            var randomCard = cardsOnDeckList.OrderBy(r => Guid.NewGuid()).Take(1);
       
        }
    }
}


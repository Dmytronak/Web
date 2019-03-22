using System;
using System.Collections.Generic;
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


        public GameService(UserManager<User> userManager,IGameRepository gameRepository, IPlayerRepository playerRepository, 
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

        public async Task PlayGame(PlayGameModel model)
        {
            var appUser = _userManager.FindByEmailAsync(model.Email);
            if (model.Name == null)
            {
                throw new ArgumentNullException("BotName received a null argument!");
            }
            var newPlayer = new Player
            {
                Name = model.Name,
                UserId = Guid.Parse(appUser.Result.Id)
            };
            await _playerRepository.Create(newPlayer);

            if (model.BotName == null)
            {
                throw new ArgumentNullException("BotName received a null argument!");
            }

            var newBot = new Bot
            {
                BotName = model.BotName
            };
            await _botRepository.Create(newBot);

            var newGame = new Game();
            

            








        }

    }

        //public async Task CreateNewBot(CreateBotGameModel model)
        //{
        //    if (model.BotName == null)
        //    {
        //        throw new ArgumentNullException("Model received a null argument!");
        //    }
        //    var newBot = new Bot()
        //    {
        //        BotName = model.BotName                
        //    };

        //    await _botRepository.Create(newBot);
        //}

        //public async Task CreateNewPlayer(CreatePlayerGameModel model)
        //{

        //    var appUser = _userManager.FindByEmailAsync(model.Email);

        //    if (model.Name == null)
        //    {
        //        throw new ArgumentNullException("Model received a null argument!");
        //    }
        //    var newPlayer = new Player()
        //    {
        //        Name = model.Name,
        //        UserId = Guid.Parse(appUser.Result.Id)
        //    };
        //    await _playerRepository.Create(newPlayer);

        //}


    }


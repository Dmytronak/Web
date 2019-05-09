using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using BlackJack.ViewModels.HistoryViews;

namespace BlackJack.BusinessLogic.Services
{
    public class HistoryService : IHistoryService
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

        public HistoryService(UserManager<User> userManager, IGameRepository gameRepository, IPlayerRepository playerRepository, IBotRepository botRepository, IPlayerStepRepository playerStepRepository,
            IBotStepRepository botStepRepository, ICardRepository cardRepository, IPlayerInGameRepository playerInGameRepository, IBotInGameRepository botInGameRepository)
        {
            _userManager = userManager;
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _botRepository = botRepository;
            _playerStepRepository = playerStepRepository;
            _botStepRepository = botStepRepository;
            _botInGameRepository = botInGameRepository;
            _playerInGameRepository = playerInGameRepository;

        }
        public async Task<BotStepsHistoryView> BotStep(BotStepsHistoryView model)
        {
            var botSteps = await _botStepRepository.GetByGameId(model.GameId);
            var bots = botSteps.Select(x => x.Bot).ToList();
            var gropedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepList = new List<BotStepsHistoryViewItem>();
            foreach (var item in gropedBotSteps)
            {
                var botName = botSteps.Select(x => x.Bot).FirstOrDefault(x => x.Id == item.Key).Name;
                var botStep = new BotStepsHistoryViewItem()
                {
                    Name = botName,
                    Steps = item.Select(x => new BotCardViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                .ToList()
                };
                botStepList.Add(botStep);
            }
            var response = new BotStepsHistoryView()
            {
                GameId = model.GameId,
                Bots = botStepList
            };
            return response;
        }
        public async Task<PlayerStepsHistoryView> PlayerStep(PlayerStepsHistoryView model)
        {
            var playerSteps = await _playerStepRepository.GetByGameId(model.GameId);
            var playersAndGames = await _playerInGameRepository.GetByGameId(model.GameId);
            var playersDB = await _playerRepository.GetAll();
            var playerGames = playersAndGames.Select(x => x).FirstOrDefault(x => x.GameId == (model.GameId));
            var player = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
            var response = new PlayerStepsHistoryView()
            {
                Name = player.Name,
                GameId = model.GameId,
                PlayerSteps = playerSteps
                .Select(x => new PlayerStepsViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList()
            };
            return response;
        }
        public async Task<GetAllGamesView> GetAllGames(GetAllGamesView model)
        {
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new NullReferenceException("user model received a null argument!");
            }
            var gamesByUserId = await _playerInGameRepository.GetByUserId(user.Result.Id);
            var playersDB = await _playerRepository.GetAll();
            var groupedGame = gamesByUserId.GroupBy(x => x.Game.Id);
            var gameList = new List<GameGetAllGameViewItem>();
            foreach (var item in groupedGame)
            {
                var fromGame = gamesByUserId.Select(x => x.Game).FirstOrDefault(x => x.Id == item.Key);
                var playerGames = gamesByUserId.Select(x => x).FirstOrDefault(x => x.GameId == item.Key);
                var player = playersDB.Select(x => x).FirstOrDefault(x => x.Id == playerGames.PlayerId);
                var game = new GameGetAllGameViewItem() {
                    Id = fromGame.Id,
                    NumberOfBots = fromGame.NumberOfBots,
                    Status = fromGame.Status,
                    Winner = fromGame.Winner,
                };
                gameList.Add(game);
            }
            var response = new GetAllGamesView()
            {
                Email = model.Email,
                Games = gameList
            };
            return response;
        }
    }
}

using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using BlackJack.ViewModels.HistoryViews;
using Microsoft.AspNetCore.Authorization;

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
        public async Task<BotStepsHistoryView> BotSteps(BotStepsHistoryView model)
        {
            var botSteps = await _botStepRepository.GetByGameId(model.GameId);
            if (botSteps.Count == 0)
            {
                throw new CustomErrorException("Game doesn`t exist");
            }
            var bots = botSteps.Select(x => x.Bot).ToList();
            var gropedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepViewItems = new List<BotBotStepsHistoryViewItem>();
            foreach (var item in gropedBotSteps)
            {
                var botName = botSteps.Select(x => x.Bot).FirstOrDefault(x => x.Id == item.Key).Name;
                var botStepViewItem = new BotBotStepsHistoryViewItem()
                {
                    Name = botName,
                    Steps = item.Select(x => new CardBotStepsHistoryViewItem()
                    {
                        Rank = x.Rank,
                        Suit = x.Suit
                    })
                .ToList()
                };
                botStepViewItems.Add(botStepViewItem);
            }
            var response = new BotStepsHistoryView()
            {
                GameId = model.GameId,
                Bots = botStepViewItems
            };
            return response;
        }
        public async Task<PlayerStepsHistoryView> PlayerStep(PlayerStepsHistoryView model)
        {
            var playerSteps = await _playerStepRepository.GetByGameId(model.GameId);
            if (playerSteps.Count == 0)
            {
                throw new CustomErrorException("Player steps doesn`t exist");
            }
            var playersAndGames = await _playerInGameRepository.GetByGameId(model.GameId);
            if (playersAndGames.Count == 0)
            {
                throw new CustomErrorException("Score doesn`t exist");
            }
            var playerGames = playersAndGames.Select(x => x).FirstOrDefault(x => x.GameId == (model.GameId));
            var player = await _playerRepository.GetById(playerGames.PlayerId);
            var response = new PlayerStepsHistoryView()
            {
                Name = player.Name,
                GameId = model.GameId,
                PlayerSteps = playerSteps
                .Select(x => new PlayerPlayerStepsHistoryViewItem()
                {
                    Rank = x.Rank,
                    Suit = x.Suit
                })
                .ToList()
            };
            return response;
        }
        public async Task<GetAllGamesHistoryView> GetAllGames(GetAllGamesHistoryView model)
        {
            if (model.Email == null)
            {
                throw new CustomErrorException("Email doesn`t exist");
            }
            var user = _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                throw new CustomErrorException("User doesn`t exist");
            }
            var playerInGames = await _playerInGameRepository.GetByUserId(user.Result.Id);
            var groupedGame = playerInGames.GroupBy(x => x.Game.Id);
            var gameViewItems = new List<GameGetAllGamesHistoryViewItem>();
            foreach (var item in groupedGame)
            {
                var fromGame = playerInGames.Select(x => x.Game).FirstOrDefault(x => x.Id == item.Key);
                var gameViewItem = new GameGetAllGamesHistoryViewItem() {
                    Id = fromGame.Id,
                    NumberOfBots = fromGame.NumberOfBots,
                    Status = fromGame.Status,
                    Winner = fromGame.Winner,
                };
                gameViewItems.Add(gameViewItem);
            }
            var response = new GetAllGamesHistoryView()
            {
                Email = model.Email,
                Games = gameViewItems
            };
            return response;
        }
    }
}

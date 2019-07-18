using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using BlackJack.ViewModels.HistoryViews;
using System;
using BlackJack.BusinessLogic.Options;
using Microsoft.Extensions.Options;

namespace BlackJack.BusinessLogic.Services
{
    public class HistoryService : IHistoryService
    {
        private readonly UserManager<User> _userManager;
        private readonly IGameRepository _gameRepository;
        private readonly IPlayerRepository _playerRepository;
        private readonly IBotRepository _botRepository;
        private readonly IPlayerStepRepository _playerStepRepository;
        private readonly IBotStepRepository _botStepRepository;
        private readonly IBotInGameRepository _botInGameRepository;
        private readonly IPlayerInGameRepository _playerInGameRepository;
        private readonly PaginationOption _paginationOptions;

        public HistoryService(IOptions<PaginationOption> paginationOptions, UserManager<User> userManager, IGameRepository gameRepository, IPlayerRepository playerRepository, IBotRepository botRepository, IPlayerStepRepository playerStepRepository,
            IBotStepRepository botStepRepository, IPlayerInGameRepository playerInGameRepository, IBotInGameRepository botInGameRepository)
        {
            _userManager = userManager;
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _botRepository = botRepository;
            _playerStepRepository = playerStepRepository;
            _botStepRepository = botStepRepository;
            _botInGameRepository = botInGameRepository;
            _playerInGameRepository = playerInGameRepository;
            _paginationOptions = paginationOptions.Value;
        }
        public async Task<GetBotStepsHistoryView> GetBotSteps(Guid gameId)
        {
            var botSteps = await _botStepRepository.GetByGameId(gameId);
            if (botSteps.Count == 0)
            {
                throw new CustomServiceException("Game doesn`t exist");
            }
            var bots = botSteps.Select(x => x.Bot).ToList();
            var groupedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepViewItems = new List<BotGetBotStepsHistoryViewItem>();
            foreach (var item in groupedBotSteps)
            {
                var botName = bots.FirstOrDefault(x => x.Id == item.Key).Name;
                var botStepViewItem = new BotGetBotStepsHistoryViewItem()
                {
                    Name = botName,
                    Steps = item.Select(cardGetBotStepsHistoryViewItem => new CardGetBotStepsHistoryViewItem()
                    {
                        Rank = cardGetBotStepsHistoryViewItem.Rank,
                        Suit = cardGetBotStepsHistoryViewItem.Suit
                    })
                .ToList()
                };
                botStepViewItems.Add(botStepViewItem);
            }
            var response = new GetBotStepsHistoryView()
            {
                GameId = gameId,
                Bots = botStepViewItems
            };
            return response;
        }
        public async Task<GetPlayerStepsHistoryView> GetPlayerStep(Guid gameId)
        {
            var playerSteps = await _playerStepRepository.GetByGameId(gameId);
            if (playerSteps.Count == 0)
            {
                throw new CustomServiceException("Player steps doesn`t exist");
            }
            var playersInGames = await _playerInGameRepository.GetByGameId(gameId);
            if (playersInGames.Count == 0)
            {
                throw new CustomServiceException("Score doesn`t exist");
            }
            var playerGames = playersInGames.Select(x => x).FirstOrDefault(x => x.GameId == gameId);
            var player = await _playerRepository.GetById(playerGames.PlayerId);
            var response = new GetPlayerStepsHistoryView()
            {
                Name = player.Name,
                GameId = gameId,
                Steps = playerSteps
                .Select(cardGetPlayerStepsHistoryViewItem => new CardGetPlayerStepsHistoryViewItem()
                {
                    Rank = cardGetPlayerStepsHistoryViewItem.Rank,
                    Suit = cardGetPlayerStepsHistoryViewItem.Suit
                })
                .ToList()
            };
            return response;
        }
        public async Task<GetAllGamesHistoryView> GetAllGames(string userId, int pageNumber, string searchString)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new CustomServiceException("User doesn`t exist");
            }
            searchString = searchString ?? string.Empty;
            var pageSize = _paginationOptions.PageSize;
            var filteredGamesCount = await _playerInGameRepository.GetFilteredCountByUserId(user.Id, searchString);
            var playerInGames = await _playerInGameRepository.GetFilteredByUserId(user.Id, searchString, pageNumber, pageSize);
            var response = new GetAllGamesHistoryView()
            {
                TotalGamesCount = filteredGamesCount,
                Games = playerInGames
                .Select(games => new GameGetAllGamesHistoryViewItem()
                {
                    Id = games.Game.Id,
                    NumberOfBots = games.Game.NumberOfBots,
                    Status = games.Game.Status,
                    Winner = games.Game.Winner

                }).ToList()
            };
            return response;
        }
    }
}


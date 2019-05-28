﻿using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using BlackJack.ViewModels.HistoryViews;
using System;
using Microsoft.AspNetCore.Http;

namespace BlackJack.BusinessLogic.Services
{
    
    public class HistoryService : IHistoryService
    {
        protected readonly UserManager<User> _userManager;
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
        public async Task<GetBotStepsHistoryView> BotSteps(Guid gameId)
        {
            var botSteps = await _botStepRepository.GetByGameId(gameId);
            if (botSteps.Count == 0)
            {
                throw new CustomServiceException("Game doesn`t exist");
            }
            var bots = botSteps.Select(x => x.Bot).ToList();
            var gropedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepViewItems = new List<BotGetBotStepsHistoryViewItem>();
            foreach (var item in gropedBotSteps)
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
        public async Task<GetPlayerStepsHistoryView> PlayerStep(Guid gameId)
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
                PlayerSteps = playerSteps
                .Select(cardGetPlayerStepsHistoryViewItem => new CardGetPlayerStepsHistoryViewItem()
                {
                    Rank = cardGetPlayerStepsHistoryViewItem.Rank,
                    Suit = cardGetPlayerStepsHistoryViewItem.Suit
                })
                .ToList()
            };
            return response;
        }
        public async Task<GetAllGamesHistoryView> GetAllGames(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new CustomServiceException("User doesn`t exist");
            }
            var playerInGames = await _playerInGameRepository.GetByUserId(user.Id);
            var groupedGames = playerInGames.GroupBy(x => x.Game.Id);
            var gameViewItems = new List<GameGetAllGamesHistoryViewItem>();
            foreach (var item in groupedGames)
            {
                var fromGame = playerInGames.Select(x => x.Game).FirstOrDefault(x => x.Id == item.Key);
                var gameViewItem = new GameGetAllGamesHistoryViewItem()
                {
                    Id = fromGame.Id,
                    NumberOfBots = fromGame.NumberOfBots,
                    Status = fromGame.Status,
                    Winner = fromGame.Winner,
                };
                gameViewItems.Add(gameViewItem);
            }
            var response = new GetAllGamesHistoryView()
            {
                Games = gameViewItems
            };
            return response;
        }
    }
}

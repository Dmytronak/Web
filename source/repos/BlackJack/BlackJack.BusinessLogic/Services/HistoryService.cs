using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using BlackJack.ViewModels.HistoryViews;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;

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
        public async Task<GetAllHistoryView> HistoryOfGames(GetAllHistoryView model)
        {
            var playerGames = await _playerInGameRepository.GetGamesAndPlayers(model.PlayerId);
            var games = playerGames.Select(x => x.Games).ToList();
            var groupedGames = games.GroupBy(x => x.Id);

            var historyModel = new GetAllHistoryView();
            historyModel.PlayerId = model.PlayerId;

            var items = new List<GetAllHistoryViewItem>();
            foreach (var item in groupedGames)
            {
                var playerSteps = await _playerStepRepository.GetPlayerSteps(item.Key);
                var bostSteps = await _botStepRepository.GetStepsAndBot(item.Key);
                var numbOfBots = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).NumberOfBots;
                var status = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).Status;
                var winner = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).Winner;
                var playerNeme = playerGames.Select(x => x.Players).FirstOrDefault(x => x.Id == model.PlayerId).Name;

                var historyOfgame = new GetAllHistoryViewItem();
                historyOfgame.Id = item.Key;
                historyOfgame.NumberOfBots = numbOfBots;
                historyOfgame.Status = status;
                historyOfgame.Winner = winner;
                historyOfgame.PlayerName = playerNeme;
                historyOfgame.PlayerSteps = playerSteps.Select(x => new GetAllHistoryStepsViewItem()
                {
                    StepRank = x.StepRank,
                    StepSuit = x.StepSuit
                })
                .ToList();

                var groupedBots = bostSteps.GroupBy(x => x.Bots.Id);
                var historyOfbots= new List<GetAllHistoryBotsViewItem>();
                foreach(var i in groupedBots)
                {
                   var botName = bostSteps.Select(x => x.Bots).FirstOrDefault(x => x.Id == i.Key).BotName;

                   var hb = new GetAllHistoryBotsViewItem();
                   hb.BotName = botName;
                   hb.BotSteps = i.Select(x => new GetAllHistoryStepsViewItem()
                    {
                        StepRank = x.BotStepRank,
                        StepSuit = x.BotStepSuit
                    }).ToList();

                    historyOfbots.Add(hb);
                }
                historyOfgame.Bots = historyOfbots;
                items.Add(historyOfgame);
            }          
            historyModel.Games.AddRange(items);

            return historyModel;
        }
        public async Task<BotStepsHistoryView> BotStepsOfGame(Guid GameId)
        {
            var botSteps = await _botStepRepository.GetStepsAndBot(GameId);
            var bots = botSteps.Select(x => x.Bots).ToList();
            var gropedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepsModel = new BotStepsHistoryView();
            var botStepList = new List<BotStepsHistoryViewItem>();
            foreach (var item in gropedBotSteps)
            {
                var botName = botSteps.Select(x => x.Bots).FirstOrDefault(x => x.Id == item.Key).BotName;
                var botStep = new BotStepsHistoryViewItem();
                botStep.BotName = botName;
                botStep.BotSteps = item.Select(x => new BotCardViewItem()
                {
                    StepRank = x.BotStepRank,
                    StepSuit = x.BotStepSuit
                })
                .ToList();
                botStepList.Add(botStep);
            }

            botStepsModel.BotSteps.AddRange(botStepList);
            return botStepsModel;
        }
        public async Task<PlayerStepsHistoryView> PlayerStepsOfGame(Guid GameId)
        {
            var playerSteps = await _playerStepRepository.GetPlayerSteps(GameId);

            var playerStepsGameModel = new PlayerStepsHistoryView();
            playerStepsGameModel.PlayerStepsOfGame = playerSteps
                .Select(x => new PlayerStepsHistoryViewItem()
                {
                   StepRank = x.StepRank,
                   StepSuit = x.StepSuit
                })
                .ToList();

            return playerStepsGameModel;
        }
        public async Task<GetAllGamesView> AllUserGames(Guid UserId)
        {
            var GamesByUserId = await _playerInGameRepository.GetGames(UserId);

            var allUserGamesModel = new GetAllGamesView();

            var groupedGame = GamesByUserId.GroupBy(x => x.Games.Id);

            var gameList = new List<GetAllGamesViewItem>();
            foreach (var item in groupedGame)
            {
                var fromGame = GamesByUserId.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key);
                var game = new GetAllGamesViewItem();
                game.Id = fromGame.Id;
                game.NumberOfBots = fromGame.NumberOfBots;
                game.Status = fromGame.Status;
                game.Winner = fromGame.Winner;
                gameList.Add(game);
            }
            allUserGamesModel.Games.AddRange(gameList);
            return allUserGamesModel;
            }
    }
}

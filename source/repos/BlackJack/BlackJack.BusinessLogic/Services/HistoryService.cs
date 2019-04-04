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

        public async Task<GamesHistoryModel> HistoryOfGames(GamesHistoryModel model)
        {
            var playerGames = await _playerInGameRepository.GetGameByPlayerId(model.PlayerId);
            var games = playerGames.Select(x => x.Games).ToList();
            var groupedGames = games.GroupBy(x => x.Id);

            var historyModel = new GamesHistoryModel();
            historyModel.PlayerId = model.PlayerId;

            var items = new List<GameHistoryItem>();
            foreach (var item in groupedGames)
            {
                var playerSteps = await _playerStepRepository.GetByGameId(item.Key);
                var bostSteps = await _botStepRepository.GetStepsAndBotByGameId(item.Key);
                var numbOfBots = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).NumberOfBots;
                var status = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).Status;
                var winner = playerSteps.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key).Winner;
                var playerNeme = playerGames.Select(x => x.Players).FirstOrDefault(x => x.Id == model.PlayerId).Name;

                var historyOfgame = new GameHistoryItem();
                historyOfgame.Id = item.Key;
                historyOfgame.NumberOfBots = numbOfBots;
                historyOfgame.Status = status;
                historyOfgame.Winner = winner;
                historyOfgame.PlayerName = playerNeme;
                historyOfgame.HistoryPlayerSteps = playerSteps.Select(x => new GameHistoryPlayerSteps()
                {
                    StepRank = x.StepRank.ToString(),
                    StepSuit = x.StepSuit.ToString()
                })
                .ToList();

                var groupedBots = bostSteps.GroupBy(x => x.Bots.Id);
                var historyOfbots= new List<GameHistoryBots>();
                foreach(var i in groupedBots)
                {
                   var botName = bostSteps.Select(x => x.Bots).FirstOrDefault(x => x.Id == i.Key).BotName;

                   var hb = new GameHistoryBots();
                   hb.BotName = botName;
                   hb.HistoryBotSteps = i.Select(x => new GameHistoryBotSteps()
                    {
                        BotStepRank = x.BotStepRank.ToString(),
                        BotStepSuit = x.BotStepSuit.ToString()
                    }).ToList();

                    historyOfbots.Add(hb);
                }
                historyOfgame.HistoryBots = historyOfbots;
                items.Add(historyOfgame);
            }          
            historyModel.Games.AddRange(items);

            return historyModel;
        }


        public async Task<BotStepsHistoryModel> BotStepsOfGame(Guid id)
        {
            var botSteps = await _botStepRepository.GetStepsAndBotByGameId(id);
            var bots = botSteps.Select(x => x.Bots).ToList();
            var gropedBotSteps = botSteps.GroupBy(x => x.BotId);
            var botStepsModel = new BotStepsHistoryModel();
            var botStepList = new List<BotStepsOfGmaeModelItem>();
            foreach (var item in gropedBotSteps)
            {
                var botName = botSteps.Select(x => x.Bots).FirstOrDefault(x => x.Id == item.Key).BotName;
                var botStep = new BotStepsOfGmaeModelItem();
                botStep.BotName = botName;
                botStep.BotStepsOfGame = item.Select(x => new BotCardsModelItem()
                {
                    BotStepRank = x.BotStepRank.ToString(),
                    BotStepSuit = x.BotStepSuit.ToString()
                })
                .ToList();
                botStepList.Add(botStep);
            }

            botStepsModel.BotStepsOfGame.AddRange(botStepList);
            return botStepsModel;
        }

        public async Task<PlayerStepsHistoryModel> PlayerStepsOfGame(Guid id)
        {
            var playerSteps = await _playerStepRepository.GetByGameId(id);

            var playerStepsGameModel = new PlayerStepsHistoryModel();
            playerStepsGameModel.PlayerStepsOfGame = playerSteps
                .Select(x => new PlayerStepsOfGmaeModelItem()
                {
                   BotStepRank = x.StepRank.ToString(),
                   BotStepSuit = x.StepSuit.ToString()
                })
                .ToList();

            return playerStepsGameModel;
        }

        public async Task<AllGamesModel> AllUserGames(Guid id)
        {
            var GamesByUserId = await _playerInGameRepository.GetGamebyUserId(id);

            var allUserGamesModel = new AllGamesModel();

            var groupedGame = GamesByUserId.GroupBy(x => x.Games.Id);

            var gameList = new List<AllGamesModelItem>();
            foreach (var item in groupedGame)
            {
                var fromGame = GamesByUserId.Select(x => x.Games).FirstOrDefault(x => x.Id == item.Key);
                var game = new AllGamesModelItem();
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

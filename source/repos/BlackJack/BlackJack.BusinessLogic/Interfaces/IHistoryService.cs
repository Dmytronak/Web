using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IHistoryService
    {
        Task<GamesHistoryModel> HistoryOfGames(GamesHistoryModel model);
        Task<AllGamesModel> AllUserGames(Guid id);
        Task<BotStepsHistoryModel> BotStepsOfGame(Guid id);
        Task<PlayerStepsHistoryModel> PlayerStepsOfGame(Guid id);
    }
}


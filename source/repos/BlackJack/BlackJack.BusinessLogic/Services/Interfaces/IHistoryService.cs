using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllGamesHistoryView> GetAllGames(GetAllGamesHistoryView model);
        Task<BotStepsHistoryView> BotSteps(BotStepsHistoryView model);
        Task<PlayerStepsHistoryView> PlayerStep(PlayerStepsHistoryView model);
    }
}


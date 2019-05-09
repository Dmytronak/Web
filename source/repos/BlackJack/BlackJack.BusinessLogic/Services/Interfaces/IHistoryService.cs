using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllGamesView> GetAllGames(GetAllGamesView model);
        Task<BotStepsHistoryView> BotStep(BotStepsHistoryView model);
        Task<PlayerStepsHistoryView> PlayerStep(PlayerStepsHistoryView model);
    }
}


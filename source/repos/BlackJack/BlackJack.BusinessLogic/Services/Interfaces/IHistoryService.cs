using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllGamesHistoryView> GetAllGames(string userId);
        Task<GetBotStepsHistoryView> BotSteps(Guid gameId);
        Task<GetPlayerStepsHistoryView> PlayerStep(Guid gameId);
    }
}


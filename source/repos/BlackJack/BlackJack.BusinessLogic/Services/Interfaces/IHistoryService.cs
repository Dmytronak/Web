using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllGamesHistoryView> GetAllGames(string userId, int currentPage, string searchString);
        Task<GetBotStepsHistoryView> GetBotSteps(Guid gameId);
        Task<GetPlayerStepsHistoryView> GetPlayerStep(Guid gameId);
    }
}


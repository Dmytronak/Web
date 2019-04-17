using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllHistoryView> HistoryOfGames(GetAllHistoryView model);
        Task<GetAllGamesView> AllUserGames(Guid UserId);
        Task<BotStepsHistoryView> BotStepsOfGame(Guid GameId);
        Task<PlayerStepsHistoryView> PlayerStepsOfGame(Guid GameId);
    }
}


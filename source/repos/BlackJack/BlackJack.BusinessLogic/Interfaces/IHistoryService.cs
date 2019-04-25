using BlackJack.ViewModels.HistoryViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IHistoryService
    {
        Task<GetAllHistoryView> HistoryOfGames(GetAllHistoryView model);
        Task<GetAllGamesView> AllUserGames(GetAllGamesView model);
        Task<BotStepsHistoryView> BotStepsOfGame(BotStepsHistoryView model);
        Task<PlayerStepsHistoryView> PlayerStepsOfGame(PlayerStepsHistoryView model);
    }
}


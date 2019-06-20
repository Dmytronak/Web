using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IGameService
    {
        Task<GetPlayGameView> GetPlay(int numberOfBots, string userId);
        Task<GetContinueGameView> GetContinue(string userId);
        Task<GetEndGameView> GetEnd(string userId);
        Task<GetPlayGameView> GetActive(string userId);
    }
}

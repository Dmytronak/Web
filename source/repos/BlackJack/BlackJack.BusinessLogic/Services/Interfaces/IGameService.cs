using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IGameService
    {
        Task<PlayGameView> Play(int numberOfBots, string userId);
        Task<ContinueGameView> Continue(string userId);
        Task<EndGameView> End(string userId);
        Task<PlayGameView> GetActive(string userId);
    }
}

using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Services.Interfaces
{
    public interface IGameService
    {
        Task<PlayGameView> Play(int numberOfBots);
        Task<ContinueGameView> Continue();
        Task<EndGameView> End();
        Task<PlayGameView> GetActive();
    }
}

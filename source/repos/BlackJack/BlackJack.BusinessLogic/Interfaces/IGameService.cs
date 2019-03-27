using BlackJack.ViewModels.GameViews;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task CreateNewPlayer(CreatePlayerGameModel model);
        Task PlayGame(PlayGameModel model);
        Task ContinueGame(ContinueGameModel model);
    }
}

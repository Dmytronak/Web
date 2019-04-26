using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task<CreatePlayerGameView> CreateNewPlayer(CreatePlayerGameView model);
        Task<GetPlayersGameView> GetAllPlayersByUser(GetPlayersGameView model);
        Task<PlayGameView> PlayGame(PlayGameView model);
        Task<ContinueGameView> ContinueGame();
        Task<EndGameView> EndGame();
        Task<PlayGameView> GetActiveGame();
    }
}

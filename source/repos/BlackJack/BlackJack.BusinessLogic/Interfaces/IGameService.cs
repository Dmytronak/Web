using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task CreateNewPlayer(CreatePlayerGameView model);
        Task<GetPlayersGameView> GetAllPlayersByUser(Guid Id);
        Task<PlayGameView> PlayGame(PlayGameView model);
        Task<ContinueGameView> ContinueGame(ContinueGameView model);
        Task<EndGameView> EndGame(EndGameView model);
    }
}

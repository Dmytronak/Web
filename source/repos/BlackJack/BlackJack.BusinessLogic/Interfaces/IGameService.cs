using BlackJack.ViewModels.GameViews;
using System;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task CreateNewPlayer(CreatePlayerGameModel model);
        Task<GetPlayersGameModel> GetAllPlayersByUser(Guid Id);
        Task<PlayGameModel> PlayGame(PlayGameModel model);
        Task<ContinueGameModel> ContinueGame(ContinueGameModel model);
        Task<EndGameModel> EndGame(EndGameModel model);
    }
}

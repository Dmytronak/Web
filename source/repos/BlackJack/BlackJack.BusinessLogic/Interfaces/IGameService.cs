using BlackJack.ViewModels.AccountViews;
using BlackJack.ViewModels.GameViews;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IGameService
    {
       //Task CreateNewPlayer(CreatePlayerGameModel model);
       //Task CreateNewBot(CreateBotGameModel model);
       Task PlayGame(PlayGameModel model);


    }
}

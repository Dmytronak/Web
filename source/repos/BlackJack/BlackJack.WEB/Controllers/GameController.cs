using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Authorization;

namespace BlackJack.WEB.Controllers
{
    [Route("api/game/[action]")]
    [Authorize]
    public class GameController : BaseController
    {
        private readonly IGameService _gameService;
    
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
          
        }
        [HttpGet]
        public async Task<PlayGameView> Play([FromQuery] int numberOfBots)
        {
            var response =  await _gameService.Play(numberOfBots, UserId());
            return response;
        }
        [HttpGet]
        public async Task<ContinueGameView> Continue()
        {
            var response = await _gameService.Continue(UserId());
            return response;
        }
        [HttpGet]
        public async Task<PlayGameView> GetActive()
        {
            var response = await _gameService.GetActive(UserId());
            return response;
        }
        [HttpGet]
        public async Task<EndGameView> End()
        {
            var response = await _gameService.End(UserId());
            return response;
        }

    }
}

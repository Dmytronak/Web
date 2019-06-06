using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Authorization;
using BlackJack.WEB.Controllers;

namespace BlackJack.Controllers
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
        [HttpPost]
        public async Task<IActionResult> Play([FromQuery]int numberOfBots)
        {
            var response =  await _gameService.Play(numberOfBots, UserId());
            return Ok(response);
        }
        [HttpPost]
        public async Task<IActionResult> Continue()
        {
            var response = await _gameService.Continue(UserId());
            return Ok(response);
        }
        [HttpGet]
        public async Task<PlayGameView> GetActive()
        {
            var response = await _gameService.GetActive(UserId());
            return response;
        }
        [HttpPost]
        public async Task<IActionResult> End()
        {
            var response = await _gameService.End(UserId());
            return Ok(response);
        }

    }
}

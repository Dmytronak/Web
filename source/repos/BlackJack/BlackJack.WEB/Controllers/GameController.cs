using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace BlackJack.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [Authorize]
    public class GameController : BaseController
    {
        private readonly IGameService _gameService;
    
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
          
        }
        [HttpGet]
        public async Task<IActionResult> Play(int numberOfBots)
        {
            var response =  await _gameService.Play(numberOfBots, UserId);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> Continue()
        {
            var response = await _gameService.Continue(UserId);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetActive()
        {
            var response = await _gameService.GetActive(UserId);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> End()
        {
            var response = await _gameService.End(UserId);
            return Ok(response);
        }

    }
}

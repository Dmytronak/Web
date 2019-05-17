using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.GameViews;

namespace BlackJack.Controllers
{
    [Route("api/game/[action]")]
    [ApiController]
    public class GameController : Controller
    {
        private readonly IGameService _gameService;
    
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
          
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> PlayGame([FromQuery]int numberOfBots)
        {
            var response =  await _gameService.Play(numberOfBots);
            return Ok(response);
        }
        [HttpPost]
        public async Task<IActionResult> ContinueGame()
        {

            var response = await _gameService.Continue();
            return Ok(response);
        }
        [HttpGet]
        public async Task<PlayGameView> GetActiveGame()
        {
            var response = await _gameService.GetActive();
            return response;
        }
        [HttpPost]
        public async Task<IActionResult> EndGame()
        {
            var response = await _gameService.End();
            return Ok(response);
        }

    }
}

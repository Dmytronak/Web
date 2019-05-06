using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Authorization;

namespace BlackJack.Controllers
{
    [Route("api/game")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly IGameService _gameService;
      

        public HomeController(IGameService gameService)
        {
            _gameService = gameService;
          
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet, Route("getExistingPlayers")]
        public async Task<GetPlayersGameView> GetExistingPlayers([FromHeader]GetPlayersGameView model)
        {
            var result = await _gameService.GetAllPlayersByUser(model);
            return result;
        }
        [HttpPost, Route("addPlayer")]
        public async Task<IActionResult> AddPlayer([FromBody]CreatePlayerGameView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result =  await _gameService.CreateNewPlayer(model);
            return Ok(result);
        }
        [HttpPost, Route("playGame")]
        public async Task<IActionResult> PlayGame([FromBody]PlayGameView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var result  =  await _gameService.PlayGame(model);
            return Ok(result);
        }

        [HttpPost, Route("continueGame")]
        public async Task<IActionResult> ContinueGame()
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            var result = await _gameService.ContinueGame();
            return Ok(result);
        }
        [HttpGet, Route("getActiveGame")]
        public async Task<PlayGameView> GetActiveGame()
        {
            var result = await _gameService.GetActiveGame();
            return result;
        }
        [HttpPost, Route("endGame")]
        public async Task<IActionResult> EndGame()
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            var result = await _gameService.EndGame();
            return Ok(result);
        }

    }
}

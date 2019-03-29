using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using BlackJack.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.ViewModels.GameViews;

namespace BlackJack.Controllers
{

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

        [HttpPost]
        public async Task<IActionResult> AddPlayer([FromBody]CreatePlayerGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            await _gameService.CreateNewPlayer(model);
            return RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> PlayGame([FromBody]PlayGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            await _gameService.PlayGame(model);
            return RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> ContinueGame([FromBody]ContinueGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            await _gameService.ContinueGame(model);
            return RedirectToAction("Index");
        }
        [HttpPost]
        public async Task<IActionResult> EndGame([FromBody]EndGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            await _gameService.EndGame(model);
            return RedirectToAction("Index");
        }

        [HttpGet, Authorize]
        public async Task<object> Protected()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }


    }
}

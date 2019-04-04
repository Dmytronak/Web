using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using BlackJack.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.ViewModels.GameViews;
using BlackJack.ViewModels.HistoryViews;
using System;

namespace BlackJack.Controllers
{

    public class HomeController : Controller
    {
        private readonly IGameService _gameService;
        private readonly IHistoryService _historyService;

        public HomeController(IGameService gameService, IHistoryService historyService)
        {
            _gameService = gameService;
            _historyService = historyService;
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
            var result  =  await _gameService.PlayGame(model);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> ContinueGame([FromBody]ContinueGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _gameService.ContinueGame(model);
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> EndGame([FromBody]EndGameModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _gameService.EndGame(model);
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> History([FromBody] GamesHistoryModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.HistoryOfGames(model);
            return Ok(result);
        }
        [HttpGet]
        public async Task<IActionResult> AllUserGames([FromBody] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return View(id);
            }

            var result = await _historyService.AllUserGames(id);
            return Ok(result);
        }
        [HttpGet]
        public async Task<IActionResult> PlayerStepsOfGame([FromBody] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return View(id);
            }

            var result = await _historyService.PlayerStepsOfGame(id);
            return Ok(result);
        }
        [HttpGet]
        public async Task<IActionResult> BotStepsOfGame([FromBody] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return View(id);
            }

            var result = await _historyService.BotStepsOfGame(id);
            return Ok(result);
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

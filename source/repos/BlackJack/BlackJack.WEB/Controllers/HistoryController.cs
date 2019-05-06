using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.ViewModels.HistoryViews;
using BlackJack.BusinessLogic.Interfaces;

namespace BlackJack.Controllers
{
    [Route("api/history")]
    [ApiController]
    public class HistoryController : Controller
    {
        private readonly IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
       
            _historyService = historyService;
        }
        [HttpPost, Route("allHistory")]
        public async Task<IActionResult> History([FromBody] GetAllHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.HistoryOfGames(model);
            return Ok(result);
        }
        [HttpGet, Route("allUserGames")]
        public async Task<IActionResult> AllUserGames([FromHeader] GetAllGamesView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.AllUserGames(model);
            return Ok(result);
        }
        [HttpGet, Route("playerSteps")]
        public async Task<IActionResult> PlayerStepsOfGame([FromHeader] PlayerStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.PlayerStepsOfGame(model);
            return Ok(result);
        }
        [HttpGet, Route("botSteps")]
        public async Task<IActionResult> BotStepsOfGame([FromHeader] BotStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.BotStepsOfGame(model);
            return Ok(result);
        }

    }
}
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.ViewModels.HistoryViews;
using BlackJack.BusinessLogic.Services.Interfaces;

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
       
        [HttpGet, Route("allUserGames")]
        public async Task<IActionResult> AllUserGames([FromHeader] GetAllGamesView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.GetAllGames(model);
            return Ok(result);
        }
        [HttpGet, Route("playerSteps")]
        public async Task<IActionResult> PlayerStepsOfGame([FromHeader] PlayerStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.PlayerStep(model);
            return Ok(result);
        }
        [HttpGet, Route("botSteps")]
        public async Task<IActionResult> BotStepsOfGame([FromHeader] BotStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _historyService.BotStep(model);
            return Ok(result);
        }

    }
}
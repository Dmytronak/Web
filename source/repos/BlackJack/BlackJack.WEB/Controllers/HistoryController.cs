using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.ViewModels.HistoryViews;
using BlackJack.BusinessLogic.Services.Interfaces;

namespace BlackJack.Controllers
{
    [Route("api/history/[action]")]
    [ApiController]

    public class HistoryController : Controller
    {
        private readonly IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
       
            _historyService = historyService;
        }
       
        [HttpGet]
        public async Task<IActionResult> AllUserGames([FromQuery] GetAllGamesHistoryView model)
        {
           var response = await _historyService.GetAllGames(model);
           return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> PlayerSteps([FromQuery] PlayerStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var response = await _historyService.PlayerStep(model);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> BotSteps([FromQuery] BotStepsHistoryView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var response = await _historyService.BotSteps(model);
            return Ok(response);
        }

    }
}
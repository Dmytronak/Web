using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.ViewModels.HistoryViews;
using BlackJack.BusinessLogic.Services.Interfaces;
using System;

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
        public async Task<IActionResult> PlayerSteps([FromQuery] Guid gameId)
        {
            var response = await _historyService.PlayerStep(gameId);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> BotSteps([FromQuery] Guid gameId)
        {
            var response = await _historyService.BotSteps(gameId);
            return Ok(response);
        }

    }
}
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.BusinessLogic.Services.Interfaces;
using System;
using Microsoft.AspNetCore.Authorization;

namespace BlackJack.Controllers
{
    [Route("api/history/[action]")]
    [ApiController]
    [Authorize]
    public class HistoryController : Controller
    {
        private readonly IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
       
            _historyService = historyService;
        }
       
        [HttpGet]
        public async Task<IActionResult> AllUserGames()
        {
           var response = await _historyService.GetAllGames();
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
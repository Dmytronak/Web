using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.BusinessLogic.Services.Interfaces;
using System;
using Microsoft.AspNetCore.Authorization;

namespace BlackJack.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [Authorize]
    public class HistoryController : BaseController
    {
        private readonly IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
            _historyService = historyService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllGames(int pageNumber,string searchString)
        {
           var response = await _historyService.GetAllGames(UserId, pageNumber, searchString);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetPlayerSteps(Guid gameId)
        {
            var response = await _historyService.GetPlayerStep(gameId);
            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetBotSteps(Guid gameId)
        {
            var response = await _historyService.GetBotSteps(gameId);
            return Ok(response);
        }

    }
}
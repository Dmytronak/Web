using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.BusinessLogic.Services.Interfaces;
using System;
using Microsoft.AspNetCore.Authorization;
using BlackJack.ViewModels.HistoryViews;

namespace BlackJack.WEB.Controllers
{
    [Route("api/history/[action]")]
    [Authorize]
    public class HistoryController : BaseController
    {
        private readonly IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
            _historyService = historyService;
        }
        [HttpGet]
        public async Task<GetAllGamesHistoryView> AllUserGames([FromQuery] int page, string searchString)
        {
           var response = await _historyService.GetAllGames(UserId(),page, searchString);
           return response;
        }
        [HttpGet]
        public async Task<GetPlayerStepsHistoryView> GetPlayerSteps([FromQuery] Guid gameId)
        {
            var response = await _historyService.GetPlayerStep(gameId);
            return response;
        }
        [HttpGet]
        public async Task<GetBotStepsHistoryView> GetBotSteps([FromQuery] Guid gameId)
        {
            var response = await _historyService.GetBotSteps(gameId);
            return response;
        }

    }
}
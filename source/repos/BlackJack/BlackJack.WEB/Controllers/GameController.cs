using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.GameViews;
using Microsoft.AspNetCore.Authorization;
using BlackJack.WEB.Controllers;

namespace BlackJack.Controllers
{
    [Route("api/game/[action]")]
    [Authorize]
    public class GameController : BaseController
    {
        private readonly IGameService _gameService;
    
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
          
        }
        [HttpGet]
        public async Task<GetPlayGameView> GetPlay([FromQuery]int numberOfBots)
        {
            var response =  await _gameService.GetPlay(numberOfBots, UserId());
            return response;
        }
        [HttpGet]
        public async Task<GetContinueGameView> GetContinue()
        {
            var response = await _gameService.GetContinue(UserId());
            return response;
        }
        [HttpGet]
        public async Task<GetPlayGameView> GetActive()
        {
            var response = await _gameService.GetActive(UserId());
            return response;
        }
        [HttpGet]
        public async Task<GetEndGameView> GetEnd()
        {
            var response = await _gameService.GetEnd(UserId());
            return response;
        }

    }
}

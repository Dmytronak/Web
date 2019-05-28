using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.AccountViews;

namespace BlackJack.Controllers
{
    [Route("api/account/[action]")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginAccountView model)
        {
            var response = await _accountService.Login(model);
            return Ok(response);
        }
        [HttpGet]
        public async Task<GetAllAccountView> Register()
        {
            var response =  await _accountService.GetAll();
            return response;
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterAccountView model)
        {
            var response = await _accountService.Register(model);
            return Ok(response);
        }
    }
}
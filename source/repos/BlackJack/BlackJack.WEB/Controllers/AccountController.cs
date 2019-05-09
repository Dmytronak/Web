using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.ViewModels.AccountViews;

namespace BlackJack.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody]LoginAccountView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var res = await _accountService.Login(model);
            return Ok(res);

        }
        [HttpGet, Route("register")]
        public async Task<GetAllAccountView> Register()
        {
            var res =  await _accountService.GetAll();
            return res;
        }
        [HttpPost,Route("register")]
        public async Task<IActionResult> Register([FromBody]RegisterAccountView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var res = await _accountService.Register(model);
            return Ok(res);
        }

    }
}
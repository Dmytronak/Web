using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomIdentity.BusinessLogic.Interfaces;
using CustomIdentity.ViewModels.AccountViews;

namespace CustomIdentity.Controllers
{

    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = null)
        {
            return View(new LoginAccountView { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<object> Login(LoginAccountView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var res = await _accountService.Login(model);
            return Ok(res);

        }
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public async Task<object> Register(RegisterAccountView model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            await _accountService.Register(model);
            return RedirectToAction("Login", "Account");
        }

    }
}
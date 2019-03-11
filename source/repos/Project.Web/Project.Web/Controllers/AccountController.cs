using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Project.BusinessLogic.Interfaces;
using Project.DataAccess.Entities;
using Project.ViewModels.IdentityViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Web.Controllers
{
    public class AccountController : Controller
    {

        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;

        }
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterAccountViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            await _accountService.RegisterAccount(model);
            return RedirectToAction("Index", "Home");
        }
    }
}

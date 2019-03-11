using Microsoft.AspNetCore.Identity;
using Project.BusinessLogic.Interfaces;
using Project.DataAccess.Entities;
using Project.ViewModels.IdentityViews;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Project.BusinessLogic.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task RegisterAccount(RegisterAccountViewModel model)
        {
            User user = new User()
            {
                Email = model.Email,
                UserName = model.Email,
                Year = model.Year
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            await _signInManager.SignInAsync(user, false);

        }
    }
}


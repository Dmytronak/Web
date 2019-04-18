using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using BlackJack.ViewModels.AccountViews;
using BlackJack.DataAccess.Entities;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.BusinessLogic.Providers.Interfaces;
using System;

namespace BlackJack.BusinessLogic.Services
{

    public class AccountService : IAccountService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IJwtProvider _jwtProvider;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager, IJwtProvider jwtProvider)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtProvider = jwtProvider;
        }


        public async Task<AccountResponseView> Login(LoginAccountView model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
            if (!result.Succeeded)
            {
                throw new NullReferenceException("INVALID Login or password");
               
            }
            var user = _userManager.Users.SingleOrDefault(x => x.Email == model.Email);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(model.Email, user);
            var val = new AccountResponseView();
            val.Token = encodedJwt;
            return val;
        }

        public async Task<AccountResponseView> Register(RegisterAccountView model)
        {
            var user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                Year = model.Year,
                RememberMe = model.RememberMe
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                throw new NullReferenceException("INVALID_REGISTER_ATTEMPT");
            }
            //await _signInManager.SignInAsync(user, false);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(model.Email, user);
            var val = new AccountResponseView();
            val.Token = encodedJwt;
            return val;

        }

        public async Task<GetAllAccountsView> RegisterList()
        {
            var users = _userManager.Users.ToList();
            var value = new GetAllAccountsView();
            value.UsersReg = users
                .Select(x => new GetAllAccountsViewItem()
                {
                    Year = x.Year,
                    Email = x.Email
                })
                .ToList();

            return value;
        }
    }
}
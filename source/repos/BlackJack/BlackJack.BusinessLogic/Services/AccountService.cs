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


        public async Task<LoginAccountResponseView> Login(LoginAccountView model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
            if (!result.Succeeded)
            {
                throw new Exception("INVALID Login or password");
               
            }
            var user = _userManager.Users.SingleOrDefault(x => x.Email == model.Email);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(model.Email, user);
            var val = new LoginAccountResponseView();
            val.Token = encodedJwt;
            return val;
        }

        public async Task<LoginAccountResponseView> Register(RegisterAccountView model)
        {
            var user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                Year = model.Year,
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                throw new Exception("INVALID_REGISTER_ATTEMPT");
            }
            //await _signInManager.SignInAsync(user, false);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(model.Email, user);
            var val = new LoginAccountResponseView();
            val.Token = encodedJwt;
            return val;

        }

        public async Task<GetAllAccountView> RegisterList()
        {
            var users = _userManager.Users.ToList();
            var value = new GetAllAccountView();
            value.Users = users
                .Select(x => new UserGetAllAccountViewItem()
                {
                    Year = x.Year,
                    Email = x.Email
                })
                .ToList();

            return value;
        }
    }
}
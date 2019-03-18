using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using BlackJack.ViewModels.AccountViews;
using BlackJack.DataAccess.Entities;
using BlackJack.BusinessLogic.Interfaces;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.ViewModels.JwtProviderView;

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

      
        public async Task<JwtTokenView> Login(LoginAccountView model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);

            if (result.Succeeded)
            {
                var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);
                var encodedJwt = await _jwtProvider.GenerateJwtToken(model.Email, appUser);
                
                return encodedJwt;
            }

            throw new ApplicationException("INVALID_LOGIN_ATTEMPT");             
        }
   
        public async Task<JwtTokenView> Register(RegisterAccountView model)
        {
            var user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                Year = model.Year
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                //await _signInManager.SignInAsync(user, false);
                var res= await _jwtProvider.GenerateJwtToken(model.Email, user);
                return res;
            }

            throw new ApplicationException("UNKNOWN_ERROR");
        }



    }
}
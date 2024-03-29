﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using BlackJack.ViewModels.AccountViews;
using BlackJack.DataAccess.Entities;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BlackJack.BusinessLogic.Services
{

    public class AccountService : IAccountService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IJwtProvider _jwtProvider;
        private readonly IPlayerRepository _playerRepository;
        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager, IJwtProvider jwtProvider, IPlayerRepository playerRepository)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtProvider = jwtProvider;
            _playerRepository = playerRepository;
        }     
        public async Task<LoginAccountResponseView> Login(LoginAccountView model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
            if (!result.Succeeded)
            {
                throw new CustomServiceException("Invalid Login or password");
               
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(user);
            var response = new LoginAccountResponseView()
            {
                Token = encodedJwt
            };
            return response;
        }
        public async Task<LoginAccountResponseView> Register(RegisterAccountView model)
        {
            var user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                Year = model.Year,
                Name = model.Name
            };
            var player = new Player()
            {
                Name = user.Name,
                UserId = user.Id
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                throw new CustomServiceException("Registration is not complete");
            }
            await _playerRepository.Create(player);
            var encodedJwt = await _jwtProvider.GenerateJwtToken(user);
            var response = new LoginAccountResponseView()
            {
                Token = encodedJwt
            };
            return response;
        }
        public async Task<GetAllAccountView> GetAll()
        {
            var users = await _userManager.Users.ToListAsync();
            var response = new GetAllAccountView()
            {
                Users = users
                .Select(x => new UserGetAllAccountViewItem()
                {
                    Year = x.Year,
                    Email = x.Email
                })
                .ToList()
            };
            return response;
        }
    }
}
﻿using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.ViewModels.JwtProviderView;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Providers
{
    public class JwtProvider : IJwtProvider
    {
        public JwtProvider(IOptions<JwtConfigurationView> options)
        {
            JwtConfigurationModel = options.Value;
        }
        public JwtConfigurationView JwtConfigurationModel { get; }
        public async Task<JwtTokenView> GenerateJwtToken(string email, User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtConfigurationModel.JwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddHours(Convert.ToDouble(JwtConfigurationModel.JwtExpireHours));

            var token = new JwtSecurityToken(
                JwtConfigurationModel.JwtIssuer,
                JwtConfigurationModel.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            var gentok =  new JwtSecurityTokenHandler().WriteToken(token);
            var model = new JwtTokenView()
            {
                Token = gentok
            };

            return  model;

        }
    }
}

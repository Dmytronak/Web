using CustomIdentity.BusinessLogic.Providers.Interfaces;
using CustomIdentity.DataAccess.Entities;
using CustomIdentity.ViewModels.JwtProviderView;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CustomIdentity.BusinessLogic.Providers
{
    public class JwtProvider : IJwtProvider
    {
        public JwtConfigurationModel JwtConfigurationModel { get; }
        public JwtProvider(IOptions<JwtConfigurationModel> options)
        {
            JwtConfigurationModel = options.Value;
        }

       

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

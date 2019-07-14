using BlackJack.BusinessLogic.Options;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.DataAccess.Entities;
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
        private readonly JwtOption _options;
        public JwtProvider(IOptions<JwtOption> options)
        {
            _options = options.Value;
        }
        public async Task<string> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Name, user.Id)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddHours(Convert.ToDouble(_options.ExpireHours));

            var token = new JwtSecurityToken(
                _options.Issuer,
                _options.Issuer,
                claims,
                expires: expires,
                signingCredentials: credentials
            );
            var response =  new JwtSecurityTokenHandler().WriteToken(token);
          
            return response;

        }
    }
}

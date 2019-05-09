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
        private readonly IOptions<JwtOption> _options;

        public JwtProvider(IOptions<JwtOption> options)
        {
            _options = options;
        }
        public async Task<string> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Value.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddHours(Convert.ToDouble(_options.Value.ExpireHours));

            var token = new JwtSecurityToken(
                _options.Value.Issuer,
                _options.Value.Issuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );
            var gentok =  new JwtSecurityTokenHandler().WriteToken(token);  
            return gentok;

        }
    }
}

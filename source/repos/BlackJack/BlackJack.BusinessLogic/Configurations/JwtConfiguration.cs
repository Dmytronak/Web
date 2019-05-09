using BlackJack.BusinessLogic.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace BlackJack.BusinessLogic.Configurations
{

    public static class JwtConfiguration
    {
        public static IConfiguration Configuration { get; set; }
        
        public static void AddJwtConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            Configuration = configuration;

            var jwtoption = configuration.GetSection("Jwt").Get<JwtOption>();
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            services
                .Configure<JwtOption>(configuration.GetSection("Jwt"))
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = jwtoption.Issuer,
                        ValidateAudience = true,
                        ValidAudience = jwtoption.Issuer,
                        ValidateLifetime = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtoption.Key)),
                        ValidateIssuerSigningKey = true,
                        ClockSkew = TimeSpan.Zero
                    };
                });
        }

    }

}
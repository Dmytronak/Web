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
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims

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
                        // укзывает, будет ли валидироваться издатель при валидации токена
                        ValidateIssuer = true,
                        // строка, представляющая издателя
                        ValidIssuer = jwtoption.Issuer,

                        // будет ли валидироваться потребитель токена
                        ValidateAudience = true,
                        // установка потребителя токена
                        ValidAudience = jwtoption.Issuer,
                        // будет ли валидироваться время существования
                        ValidateLifetime = true,

                        // установка ключа безопасности
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtoption.Key)),
                        // валидация ключа безопасности
                        ValidateIssuerSigningKey = true,
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };
                });
        }

    }

}
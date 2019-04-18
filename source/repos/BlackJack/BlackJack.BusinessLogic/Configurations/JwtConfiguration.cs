using BlackJack.ViewModels.JwtProviderView;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
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

            var jwtoption = Options.Create(configuration.GetSection("JwtConfiguration").Get<JwtConfigurationView>());
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims

            services

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
                        ValidIssuer = jwtoption.Value.JwtIssuer,

                        // будет ли валидироваться потребитель токена
                        ValidateAudience = true,
                        // установка потребителя токена
                        ValidAudience = jwtoption.Value.JwtIssuer,
                        // будет ли валидироваться время существования
                        ValidateLifetime = true,

                        // установка ключа безопасности
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtoption.Value.JwtKey)),
                        // валидация ключа безопасности
                        ValidateIssuerSigningKey = true,
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };
                });
        }

    }

}
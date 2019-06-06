using BlackJack.BusinessLogic.Providers;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.BusinessLogic.Services;
using BlackJack.BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using BlackJack.DataAccess.Repositories.Interfaces;
using entity = BlackJack.DataAccess.Repositories.EntityFramework;
using dapper = BlackJack.DataAccess.Repositories.Dapper;
using BlackJack.BusinessLogic.Helpers.Interfaces;
using BlackJack.BusinessLogic.Helpers;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DependencyConfiguration
    {
        public static void AddDependencyConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var activeRepository = configuration.GetSection("ActiveRepository").Value;
            if (activeRepository == "Dapper")
            {
                services.AddTransient<IBotRepository, dapper.BotRepository>();
                services.AddTransient<IBotStepRepository, dapper.BotStepRepository>();
                services.AddTransient<ICardRepository, dapper.CardRepository>();
                services.AddTransient<IGameRepository, dapper.GameRepository>();
                services.AddTransient<IPlayerRepository, dapper.PlayerRepository>();
                services.AddTransient<IPlayerStepRepository, dapper.PlayerStepRepository>();
                services.AddTransient<IBotInGameRepository, dapper.BotInGameRepository>();
                services.AddTransient<IPlayerInGameRepository, dapper.PlayerInGameRepository>();
            }
            if (activeRepository == "Entity")
            {
                services.AddTransient<IBotRepository, entity.BotRepository>();
                services.AddTransient<IBotStepRepository, entity.BotStepRepository>();
                services.AddTransient<ICardRepository, entity.CardRepository>();
                services.AddTransient<IGameRepository, entity.GameRepository>();
                services.AddTransient<IPlayerRepository, entity.PlayerRepository>();
                services.AddTransient<IPlayerStepRepository, entity.PlayerStepRepository>();
                services.AddTransient<IBotInGameRepository, entity.BotInGameRepository>();
                services.AddTransient<IPlayerInGameRepository, entity.PlayerInGameRepository>();
            }

            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IGameService, GameService>();
            services.AddTransient<IHistoryService, HistoryService>();
            services.AddTransient<IJwtProvider, JwtProvider>();
            services.AddTransient<ICardHelper, CardHelper>();

        }
    }
}
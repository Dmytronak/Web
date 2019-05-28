﻿using BlackJack.BusinessLogic.Providers;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.BusinessLogic.Services;
using BlackJack.BusinessLogic.Services.Interfaces;
using BlackJack.DataAccess.Repositories.Interfaces;
using BlackJack.DataAccess.Repositories.Dapper;
using Microsoft.Extensions.DependencyInjection;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DependencyConfiguration
    {
        public static void AddDependencyConfiguration(this IServiceCollection services)
        {
            services.AddSingleton<ConnectionStringConfiguration>();
            services.AddTransient<IBotRepository, BotRepository>();
            services.AddTransient<IBotStepRepository, BotStepRepository>();
            services.AddTransient<ICardRepository, CardRepository>();
            services.AddTransient<IGameRepository, GameRepository>();
            services.AddTransient<IPlayerRepository, PlayerRepository>();
            services.AddTransient<IPlayerStepRepository, PlayerStepRepository>();
            services.AddTransient<IBotInGameRepository, BotInGameRepository>();
            services.AddTransient<IPlayerInGameRepository, PlayerInGameRepository>();

            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IGameService, GameService>();
            services.AddTransient<IHistoryService, HistoryService>();
            services.AddTransient<IJwtProvider, JwtProvider>();
        }
    }
}

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
                services.Scan(scan => scan
                .FromAssemblyOf<IBotRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.BotRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IBotStepRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.BotStepRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<ICardRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.CardRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IGameRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.GameRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IPlayerRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.PlayerRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IPlayerStepRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.PlayerStepRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IBotInGameRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.BotInGameRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime()
                .FromAssemblyOf<IPlayerInGameRepository>()
                .AddClasses(classes => classes.AssignableTo<dapper.PlayerInGameRepository>())
                .AsImplementedInterfaces()
                .WithTransientLifetime());
            }
            if (activeRepository == "Entity")
            {
                services.Scan(scan => scan
                 .FromAssemblyOf<IBotRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.BotRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IBotStepRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.BotStepRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<ICardRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.CardRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IGameRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.GameRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IPlayerRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.PlayerRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IPlayerStepRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.PlayerStepRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IBotInGameRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.BotInGameRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime()
                 .FromAssemblyOf<IPlayerInGameRepository>()
                 .AddClasses(classes => classes.AssignableTo<entity.PlayerInGameRepository>())
                 .AsImplementedInterfaces()
                 .WithTransientLifetime());
            }
            services.Scan(scan => scan
            .FromAssemblyOf<IAccountService>()
            .AddClasses(classes => classes.AssignableTo<AccountService>())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf<IGameService>()
            .AddClasses(classes => classes.AssignableTo<GameService>())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf<IHistoryService>()
            .AddClasses(classes => classes.AssignableTo<HistoryService>())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf<IJwtProvider>()
            .AddClasses(classes => classes.AssignableTo<JwtProvider>())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf<ICardHelper>()
            .AddClasses(classes => classes.AssignableTo<CardHelper>())
            .AsImplementedInterfaces()
            .WithTransientLifetime());
        }
    }
}
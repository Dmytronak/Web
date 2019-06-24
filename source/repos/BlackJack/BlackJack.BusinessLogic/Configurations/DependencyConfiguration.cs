using BlackJack.BusinessLogic.Providers;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.BusinessLogic.Services;
using BlackJack.BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using BlackJack.DataAccess.Repositories.Interfaces;
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
                services.Scan(scan =>
                 scan.FromCallingAssembly()
                 .FromAssemblies(
                   typeof(IBotRepository).Assembly,
                   typeof(IBotStepRepository).Assembly,
                   typeof(ICardRepository).Assembly,
                   typeof(IGameRepository).Assembly,
                   typeof(IPlayerRepository).Assembly,
                   typeof(IPlayerStepRepository).Assembly,
                   typeof(IBotInGameRepository).Assembly,
                   typeof(IPlayerInGameRepository).Assembly
               )
               .AddClasses(classes => classes.InNamespaces("BlackJack.DataAccess.Repositories.Dapper"))
               .AsImplementedInterfaces()
               .WithTransientLifetime());
            }
            if (activeRepository == "Entity")
            {
                services.Scan(scan =>
                 scan.FromCallingAssembly()
                 .FromAssemblies(
                   typeof(IBotRepository).Assembly,
                   typeof(IBotStepRepository).Assembly,
                   typeof(ICardRepository).Assembly,
                   typeof(IGameRepository).Assembly,
                   typeof(IPlayerRepository).Assembly,
                   typeof(IPlayerStepRepository).Assembly,
                   typeof(IBotInGameRepository).Assembly,
                   typeof(IPlayerInGameRepository).Assembly
               )
               .AddClasses(classes => classes.InNamespaces("BlackJack.DataAccess.Repositories.EntityFramework"))
               .AsImplementedInterfaces()
               .WithTransientLifetime());
            }
            services.Scan(scan =>
                scan.FromCallingAssembly()
                .FromAssemblies(
                  typeof(IAccountService).Assembly,
                  typeof(IGameService).Assembly,
                  typeof(IJwtProvider).Assembly,
                  typeof(IHistoryService).Assembly,
                  typeof(ICardHelper).Assembly
              )
              .AddClasses()
              .AsImplementedInterfaces()
              .WithTransientLifetime());
        }
    }
}
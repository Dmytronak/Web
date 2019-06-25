using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using BlackJack.DataAccess.Repositories.Interfaces;
using BlackJack.BusinessLogic.Helpers.Interfaces;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DependencyConfiguration
    {
        public static void AddDependencyConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var activeRepository = configuration.GetSection("ActiveRepository").Value;
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
                   typeof(IPlayerInGameRepository).Assembly)
               .AddClasses(classes => classes.InNamespaces(activeRepository))
               .AsImplementedInterfaces()
               .WithTransientLifetime()
               .FromAssemblies(
                  typeof(IAccountService).Assembly,
                  typeof(IGameService).Assembly,
                  typeof(IJwtProvider).Assembly,
                  typeof(IHistoryService).Assembly,
                  typeof(ICardHelper).Assembly)
              .AddClasses()
              .AsImplementedInterfaces()
              .WithTransientLifetime());
        }
    }
}
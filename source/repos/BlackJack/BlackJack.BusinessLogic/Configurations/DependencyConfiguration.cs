using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using BlackJack.DataAccess;
using dapper = BlackJack.DataAccess.Repositories.Dapper;
using entity = BlackJack.DataAccess.Repositories.EntityFramework;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DependencyConfiguration
    {
        public static void AddDependencyConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var activeRepository = configuration.GetSection("ActiveRepository").Value;
            if (activeRepository == "EntityFramework")
            {
                services.Scan(scan =>
                scan.FromAssemblyOf<ApplicationContext>()
                .AddClasses(classes => classes.InNamespaceOf<entity.BotInGameRepository>())
                .AsMatchingInterface());
            }
            if (activeRepository == "Dapper")
            {
                services.Scan(scan =>
                scan.FromAssemblyOf<ApplicationContext>()
                .AddClasses(classes => classes.InNamespaceOf<dapper.BotInGameRepository>())
                .AsMatchingInterface());
            }
            services.Scan(scan =>
                scan.FromCallingAssembly()
                .AddClasses()
                .AsMatchingInterface());
        }
    }
}
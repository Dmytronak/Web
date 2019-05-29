using BlackJack.BusinessLogic.Providers;
using BlackJack.BusinessLogic.Providers.Interfaces;
using BlackJack.BusinessLogic.Services;
using BlackJack.BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using BlackJack.BusinessLogic.Options;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DependencyConfiguration
    {
        public static void AddDependencyConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var assembly = typeof(DataAccess.ApplicationContext).Assembly;
            var serviceOption = configuration.GetSection(configuration.GetSection("ActiveRepository").Value).Get<List<ServiceOption>>();
            foreach (var option in serviceOption)
            {
                services.Add(new ServiceDescriptor(
                    serviceType: assembly.GetType(option.ServiceType),
                    implementationType: assembly.GetType(option.ImplementationType),
                    lifetime: option.Lifetime));
            }

            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IGameService, GameService>();
            services.AddTransient<IHistoryService, HistoryService>();
            services.AddTransient<IJwtProvider, JwtProvider>();
        }
    }
}
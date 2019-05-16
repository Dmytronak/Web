using BlackJack.BusinessLogic.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class OptionsConfiguration
    {
        public static void AddOptionsConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services
                .Configure<JwtOption>(configuration.GetSection("Jwt"));    
        }
    }
}

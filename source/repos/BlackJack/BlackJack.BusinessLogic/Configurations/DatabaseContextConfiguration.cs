using BlackJack.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DatabaseContextConfiguration
    {
        public static void AddDatabaseContextConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationContext>(options =>
              options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
        }
    }
}

using BlackJack.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class DatabaseContextConfiguration 
    {

        public static void AddDatabaseContextConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<ConnectionStringInjector>();
            using (var serviceProvider = services.BuildServiceProvider())
            {
                var connectionStringInjector = serviceProvider.GetService<ConnectionStringInjector>();
                services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionStringInjector.GetConnectionString(configuration)));
                services.AddTransient<IDbConnection>((sp) => new SqlConnection(connectionStringInjector.GetConnectionString(configuration)));
            }
        }
    }
}

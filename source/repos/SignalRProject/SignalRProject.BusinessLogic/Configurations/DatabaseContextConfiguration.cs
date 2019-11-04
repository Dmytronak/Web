using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SignalRProject.DataAccess;
using System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;

namespace SignalRProject.BusinessLogic.Configurations
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

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
            var connect = services.BuildServiceProvider().GetService<ConnectionStringConfiguration>();
            services.BuildServiceProvider().Dispose();
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connect.ConnectionString(configuration)));
            services.AddTransient<IDbConnection>((sp) => new SqlConnection(connect.ConnectionString(configuration)));
        }
    }
}

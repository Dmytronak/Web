using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.BusinessLogic.Configurations
{
    public class ConnectionStringConfiguration
    {
        IConfiguration _configuration;
        public ConnectionStringConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string ConnectionString()
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            return connectionString;
        }
    }
}

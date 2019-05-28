using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.BusinessLogic.Configurations
{
    public class ConnectionStringConfiguration
    {
        public string ConnectionString(IConfiguration configuration)
        {
            var response = configuration.GetConnectionString("DefaultConnection");
            return response;
        }
       
    }
}

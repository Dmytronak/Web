using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.BusinessLogic.Configurations
{
    public class ConnectionStringInjector : IDisposable
    {
        public string GetConnectionString(IConfiguration configuration)
        {
            var response = configuration.GetConnectionString("DefaultConnection");
            return response;
        }
        void IDisposable.Dispose()
        {

        }
    }
}

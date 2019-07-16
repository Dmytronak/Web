using Microsoft.Extensions.Configuration;
using System;

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

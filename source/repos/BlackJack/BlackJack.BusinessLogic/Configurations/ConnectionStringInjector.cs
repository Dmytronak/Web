using Microsoft.Extensions.Configuration;

namespace BlackJack.BusinessLogic.Configurations
{
    public class ConnectionStringInjector
    {
        public string GetConnectionString(IConfiguration configuration)
        {
            var response = configuration.GetConnectionString("DefaultConnection");
            return response;
        }
    }
}

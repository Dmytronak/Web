using BlackJack.DataAccess;
using BlackJack.DataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace BlackJack.BusinessLogic.Configurations
{
    public static class IdentityConfiguration
    {
      
        public static void AddIdentityConfiguration(this IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();
         
        }
    }
}

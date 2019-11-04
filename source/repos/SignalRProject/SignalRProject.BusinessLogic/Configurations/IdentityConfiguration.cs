using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using SignalRProject.DataAccess;
using SignalRProject.DataAccess.Entities;

namespace SignalRProject.BusinessLogic.Configurations
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

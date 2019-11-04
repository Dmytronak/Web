using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SignalRProject.DataAccess.Entities;

namespace SignalRProject.DataAccess
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Message> Messages { get; set; }
        public DbSet<Chat> Chats { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options) 
            : base(options)
        {
        }
    }
}

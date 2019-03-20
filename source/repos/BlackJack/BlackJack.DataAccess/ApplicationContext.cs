using BlackJack.DataAccess.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BlackJack.DataAccess
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Card> Cards { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<BotStep> BotSteps { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Bot> Bots { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }
    }
}
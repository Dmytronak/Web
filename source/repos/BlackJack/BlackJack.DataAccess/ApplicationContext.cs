using BlackJack.DataAccess.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BlackJack.DataAccess
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Bot> Bots { get; set; }
        public DbSet<BotStep> BotSteps { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<PlayerStep> PlayerSteps { get; set; }
        public DbSet<BotInGame> BotInGames { get; set; }
        public DbSet<PlayerInGame> PlayerInGames { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
    }
}
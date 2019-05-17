using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
    { 
        public PlayerRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<Player> GetByUserId(string userId)
        {
            var result = await _dbSet
                .Where(x => x.UserId == userId)
                .FirstOrDefaultAsync();
            return result;
        }

    }
}

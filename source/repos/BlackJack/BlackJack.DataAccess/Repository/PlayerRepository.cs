using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
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

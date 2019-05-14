using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class GameRepository : BaseRepository<Game>, IGameRepository
    {
        public GameRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<Game> GetActiveGame()
        {
            var result = await _dbSet
                .Where(x => x.Status == Enums.StatusType.New || x.Status == Enums.StatusType.Continue)
                .FirstOrDefaultAsync();
            return result;
        }
    }
   
}


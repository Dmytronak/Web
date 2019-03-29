using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class GameRepository : BaseRepository<Game>, IGameRepository
    {
        DbSet<Game> _dbSet;

        public GameRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<Game>();
        }
        public async Task<List<Game>> GetGamesByPlayerId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.PlayerId == id)
                .ToListAsync();
            return result;
        }
    }
   
}


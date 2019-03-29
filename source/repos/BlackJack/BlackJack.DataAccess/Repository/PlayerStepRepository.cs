using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class PlayerStepRepository : BaseRepository<PlayerStep>, IPlayerStepRepository
    {
        DbSet<PlayerStep> _dbSet;

        public PlayerStepRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<PlayerStep>();
        }
        public async Task<List<PlayerStep>> GetByGameId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.GameId == id)
                .ToListAsync();
            return result;
        }
    }
}

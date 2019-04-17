using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
    {
        DbSet<Player> _dbSet;
        public PlayerRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<Player>();
        }
        public async Task<List<Player>> GetPlayers(Guid UserId)
        {
            var result = await _dbSet
                .Where(x => x.UserId == UserId)
                .ToListAsync();
            return result;
        }

    }
}

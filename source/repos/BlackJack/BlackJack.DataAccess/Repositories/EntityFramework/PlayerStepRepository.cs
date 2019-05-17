using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class PlayerStepRepository : BaseRepository<PlayerStep>, IPlayerStepRepository
    {
        public PlayerStepRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<List<PlayerStep>> GetByGameId(Guid gameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == gameId)
                .ToListAsync();
            return result;
        }
    }
}

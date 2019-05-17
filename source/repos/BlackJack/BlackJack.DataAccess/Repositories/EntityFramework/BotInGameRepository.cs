using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class BotInGameRepository : BaseRepository<BotInGame>, IBotInGameRepository
    {
        public BotInGameRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<List<BotInGame>> GetByGameId(Guid gameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == gameId)
                .Include(x=>x.Bot)
                .ToListAsync();
            return result;
        }
    }
}
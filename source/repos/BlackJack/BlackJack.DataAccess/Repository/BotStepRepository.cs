using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class BotStepRepository : BaseRepository<BotStep>, IBotStepRepository
    {
        public BotStepRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<List<BotStep>> GetByGameId(Guid gameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == gameId)
                .Include(x =>x.Bot)
                .ToListAsync();
            return result;
        }

        public async Task<List<BotStep>> GetByBotId(Guid botId)
        {
            var result = await _dbSet
                .Where(x => x.BotId == botId)
                .ToListAsync();
            return result;
        }
    }
}

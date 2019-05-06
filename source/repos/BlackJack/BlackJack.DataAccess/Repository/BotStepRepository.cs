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
        DbSet<BotStep> _dbSet;

        public BotStepRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<BotStep>();
        }
        public async Task<List<BotStep>> GetByGameId(Guid GameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == GameId)
                .Include(x =>x.Bot)
                .ToListAsync();
            return result;
        }

        public async Task<List<BotStep>> GetStepsByBotId(Guid BotId)
        {
            var result = await _dbSet
                .Where(x => x.BotId == BotId)
                .ToListAsync();
            return result;
        }
    }
}

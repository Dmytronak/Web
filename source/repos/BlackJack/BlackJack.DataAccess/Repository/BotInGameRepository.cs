﻿using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class BotInGameRepository : BaseRepository<BotInGame>, IBotInGameRepository
    {
        DbSet<BotInGame> _dbSet;
        public BotInGameRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<BotInGame>();
        }
        public async Task<List<BotInGame>> GetBotInGameByGameId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.GameId == id)
                .Include(x=>x.Bots)
                .ToListAsync();
            return result;
        }
    }
}
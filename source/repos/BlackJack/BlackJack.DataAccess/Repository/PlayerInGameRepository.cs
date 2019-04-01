﻿using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class PlayerInGameRepository : BaseRepository<PlayerInGame>, IPlayerInGameRepository
    {
        DbSet<PlayerInGame> _dbSet;
        public PlayerInGameRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<PlayerInGame>();
        }
        public async Task<List<PlayerInGame>> GetByGameId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.GameId == id)
                .Include(x=>x.Players)
                .ToListAsync();
            return result;
        }

    }
}
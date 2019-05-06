using BlackJack.DataAccess.Entities;
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
        public async Task<List<PlayerInGame>> GetByGameId(Guid GameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == GameId)
                .Include(x=>x.Player)
                .ToListAsync();
            return result;
        }
        public async Task<List<PlayerInGame>> GetByPlayerId(Guid PlayerId)
        {
            var result = await _dbSet
                .Where(x => x.PlayerId == PlayerId)
                .Include(x => x.Game)
                .Include(x=>x.Player)
                .ToListAsync();
            return result;
        }
        public async Task<List<PlayerInGame>> GetByUserId(string UserId)
        {
            var result = await _dbSet
                .Where(x => x.Player.UserId == UserId)
                .Include(x => x.Game)
                .Include(x=>x.Player)
                .ToListAsync();
            return result;
        }

    }
}
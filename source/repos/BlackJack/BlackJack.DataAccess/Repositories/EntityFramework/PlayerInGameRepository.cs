using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class PlayerInGameRepository : BaseRepository<PlayerInGame>, IPlayerInGameRepository
    {
        public PlayerInGameRepository(ApplicationContext context) : base(context)
        {
        }
        public async Task<List<PlayerInGame>> GetByGameId(Guid gameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == gameId)
                .Include(x=>x.Player)
                .ToListAsync();
            return result;
        }
        public async Task<List<PlayerInGame>> GetByUserId(string userId)
        {
            var result = await _dbSet
                .Where(x => x.Player.UserId == userId)
                .Include(x => x.Game)
                .Include(x=>x.Player)
                .ToListAsync();
            return result;
        }
        public async Task<PlayerInGame> GetActiveByUserId(string userId)
        {
            var result = await _dbSet
                .Where(x => x.Player.UserId == userId)
                .Include(x => x.Game)
                .Where(x => x.Game.Status == Enums.StatusType.New || x.Game.Status == Enums.StatusType.Continue)
                .FirstOrDefaultAsync();
            return result;
        }
    }
}
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
        public async Task<List<PlayerInGame>> GetByUserId(string userId, string searchString)
        {
            var result = await _dbSet
               .Where(x => x.Player.UserId == userId)
               .Include(x => x.Game)
               .Where(x => x.Game.Status
                  .ToString()
                  .Contains(searchString)
                  || x.Game.Winner
                  .Contains(searchString)
                  || x.Game.NumberOfBots
                  .ToString()
                  .Contains(searchString))
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
        public async Task<List<PlayerInGame>> GetFilteredByUserId(string userId, string searchString, int pageNumber, int pageSize)
        {
            var offset = (pageNumber - 1) * pageSize;
            var games = await GetByUserId(userId, searchString);
            var result = games
                .OrderBy(game => game.Game.Id)
                .Skip(offset)
                .Take(pageSize)
                .ToList();
            return result;
        }
        public async Task<int> GetFilteredCountByUserId(string userId, string searchString)
        {
            var games = await GetByUserId(userId, searchString);
            var result = games
               .Select(x=>x.Game)
               .Distinct()
               .Count();
            return result;
        }
    }
}
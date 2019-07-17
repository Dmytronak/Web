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
            var result = await GenerateFilteredQuery(userId,searchString)
                .GroupBy(game => game.GameId)
                .Select(groupGames => groupGames.First())
                .OrderBy(game => game.GameId)
                .Skip(offset)
                .Take(pageSize)
                .ToListAsync();
            return result;
        }
        public async Task<int> GetFilteredCountByUserId(string userId, string searchString)
        {
            var result = await GenerateFilteredQuery(userId, searchString)
               .Select(x=>x.GameId)
               .Distinct()
               .CountAsync();
            return result;
        }
        private IQueryable<PlayerInGame> GenerateFilteredQuery(string userId, string searchString)
        {
            var result = _dbSet
                .AsQueryable()
                .Include(x => x.Game)
                .Where(x => x.Player.UserId == userId 
                 && (x.Game.Status
                 .ToString()
                 .Contains(searchString)
                 || x.Game.Winner
                 .Contains(searchString)
                 || x.Game.NumberOfBots
                 .ToString()
                 .Contains(searchString)));
            return result;
        }
    }
}
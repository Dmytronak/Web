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
        public async Task<List<PlayerInGame>> GetPlayersInGame(Guid GameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == GameId)
                .Include(x=>x.Players)
                .ToListAsync();
            return result;
        }
        public async Task<List<PlayerInGame>> GetGamesAndPlayers(Guid PlayerId)
        {
            var result = await _dbSet
                .Where(x => x.PlayerId == PlayerId)
                .Include(x => x.Games)
                .Include(x=>x.Players)
                .ToListAsync();
            return result;
        }
        public async Task<List<PlayerInGame>> GetGames(Guid UserId)
        {
            var result = await _dbSet
                .Where(x => x.Players.UserId == UserId)
                .Include(x => x.Games)
                .ToListAsync();
            return result;
        }

    }
}
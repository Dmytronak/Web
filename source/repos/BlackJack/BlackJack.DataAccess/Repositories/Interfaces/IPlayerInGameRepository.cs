using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetByGameId(Guid gameId);
        Task<List<PlayerInGame>> GetByUserId(string userId);
        Task<PlayerInGame> GetActiveByUserId(string userId);
        Task<List<PlayerInGame>> GetFilteredGameByUserId(string userId, string searchString, int pageNumber);
        Task<int> GetCountByUserIdAsync(string userId, string searchString);
    }
}

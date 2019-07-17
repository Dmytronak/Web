using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetByGameId(Guid gameId);
        IQueryable<PlayerInGame> GenerateFilteredQuery(string userId, string searchString);
        Task<PlayerInGame> GetActiveByUserId(string userId);
        Task<List<PlayerInGame>> GetFilteredByUserId(string userId, string searchString, int pageNumber,int pageSize);
        Task<int> GetFilteredCountByUserId(string userId, string searchString);
    }
}

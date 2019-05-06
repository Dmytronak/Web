using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetByGameId(Guid GameId);
        Task<List<PlayerInGame>> GetByPlayerId(Guid PlayerId);
        Task<List<PlayerInGame>> GetByUserId(string UserId);
    }
}

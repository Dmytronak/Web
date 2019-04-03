using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetByGameId(Guid id);
        Task<List<PlayerInGame>> GetGameByPlayerId(Guid id);
        Task<List<PlayerInGame>> GetGamebyUserId(Guid id);
    }
}

using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface IBotInGameRepository : IBaseRepository<BotInGame>
    {
        Task<List<BotInGame>> GetByGameId(Guid gameId);
    }
}
using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface IBotStepRepository : IBaseRepository<BotStep>
    {
        Task<List<BotStep>> GetByGameId(Guid gameId);
        Task<List<BotStep>> GetByBotId(Guid botId);
    }
}

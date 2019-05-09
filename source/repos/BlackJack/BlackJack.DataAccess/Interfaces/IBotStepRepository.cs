using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IBotStepRepository : IBaseRepository<BotStep>
    {
        Task<List<BotStep>> GetByGameId(Guid gameId);
        Task<List<BotStep>> GetStepByBotId(Guid botId);
    }
}

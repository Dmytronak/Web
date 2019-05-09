﻿using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetByGameId(Guid gameId);
        Task<List<PlayerInGame>> GetByPlayerId(Guid playerId);
        Task<List<PlayerInGame>> GetByUserId(string userId);
    }
}

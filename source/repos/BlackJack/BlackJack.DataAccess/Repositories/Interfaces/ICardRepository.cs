﻿using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface ICardRepository : IBaseRepository<Card>
    {
        Task<List<Card>> GetByGameId(Guid gameId);
      
    }
}

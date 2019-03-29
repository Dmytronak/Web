using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface ICardRepository : IBaseRepository<Card>
    {
        Task<List<Card>> GetByGameId(Guid id);
      
    }
}

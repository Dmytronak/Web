using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repository
{
    public class CardRepository : BaseRepository<Card>, ICardRepository
    {
        DbSet<Card> _dbSet;

        public CardRepository(ApplicationContext context) : base(context)
        {
            _dbSet = context.Set<Card>();
        }
        public async Task<List<Card>> GetByGameId(Guid GameId)
        {
            var result = await _dbSet
                .Where(x => x.GameId == GameId)
                .ToListAsync();
            return result;
        }

    }
}


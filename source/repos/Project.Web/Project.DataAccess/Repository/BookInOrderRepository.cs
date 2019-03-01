using Microsoft.EntityFrameworkCore;
using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.DataAccess.Repository
{
    public class BookInOrderRepository : BaseRepository<BookInOrder>, IBookInOrderRepository
    {
    
        DbSet<BookInOrder> _dbSet;
       

        public BookInOrderRepository(DataBaseContext context) : base(context)
        {
           
            _dbSet = context.Set<BookInOrder>();
           
        }
        public async Task<List<BookInOrder>> GetByOrderId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.OrderId == id)
                .Include(x => x.Book)
                .ToListAsync();
            return result;
        }

    }
}

using Microsoft.EntityFrameworkCore;
using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using System;
using System.Threading.Tasks;

namespace Project.DataAccess.Repository
{
    public class BookInOrderRepository : BaseRepository<BookInOrder>, IBookInOrderRepository
    {
    
        DbSet<BookInOrder> _dbSet;
        DbSet<Book> _dbSetb;

        public BookInOrderRepository(DataBaseContext context) : base(context)
        {
           
            _dbSet = context.Set<BookInOrder>();
            _dbSetb = context.Set<Book>();
        }

        public Task<BookInOrder> GetBookByBookId(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<BookInOrder> GetByOrderId(Guid id)
        {
            var result = await _dbSet.FirstOrDefaultAsync(x => x.OrderId == id);
            return result;
        }
        //public async Task<Book> GetBookByBookId(Guid id)
        //{
        //    var result = await _dbSet.FirstOrDefaultAsync(x => x.Book.Id == x.BookId);
        //    return result;
        //}

    }
}

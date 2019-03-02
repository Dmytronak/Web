using Project.DataAccess.Interfaces;
using Project.DataAccess.Entities;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Project.DataAccess.Repository
{
    public class BookRepository : BaseRepository<Book>, IBookRepository
    {
        DbSet<Book> _dbSet;

        public BookRepository(DataBaseContext context) : base(context)
        {
            _dbSet = context.Set<Book>();
        }
        public async Task<List<Book>> GetByCategoryId(Guid id)
        {
            var result = await _dbSet
                .Where(x => x.CategoryId == id)
                .Include(x => x.Category)
                .ToListAsync();
            return result;
        }

    }
}

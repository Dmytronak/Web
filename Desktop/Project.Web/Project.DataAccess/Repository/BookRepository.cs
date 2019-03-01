using Project.DataAccess.Interfaces;
using Project.DataAccess.Entities;
using System;
using System.Threading.Tasks;

namespace Project.DataAccess.Repository
{
    public class BookRepository : BaseRepository<Book>, IBookRepository
    {
        public BookRepository(DataBaseContext context) : base(context)
        {

        }

 
    }
}

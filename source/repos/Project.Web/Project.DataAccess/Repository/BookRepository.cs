using Project.DataAccess.Interfaces;
using Project.DataAccess.Entities;

namespace Project.DataAccess.Repository
{
    public class BookRepository : BaseRepository<Book>, IBookRepository
    {
        public BookRepository(DataBaseContext context) : base(context)
        {

        }

 
    }
}

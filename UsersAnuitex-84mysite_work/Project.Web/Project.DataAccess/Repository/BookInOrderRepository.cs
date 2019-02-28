using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Project.DataAccess.Repository
{
    public class BookInOrderRepository : BaseRepository<BookInOrder>, IBookInOrderRepository
    {
        public BookInOrderRepository(DataBaseContext context) : base(context)
        {
        }
    }
}

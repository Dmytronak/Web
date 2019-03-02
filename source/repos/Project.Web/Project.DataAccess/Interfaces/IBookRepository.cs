using Project.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.DataAccess.Interfaces
{
    public interface IBookRepository : IBaseRepository<Book>
    {
        Task<List<Book>> GetByCategoryId(Guid id);
    }

}

using Project.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.DataAccess.Interfaces
{
    public interface IBookInOrderRepository : IBaseRepository<BookInOrder>
    {
        Task<List<BookInOrder>> GetByOrderId(Guid id);
        
    }
}

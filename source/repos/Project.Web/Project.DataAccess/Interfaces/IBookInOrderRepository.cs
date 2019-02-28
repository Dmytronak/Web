using Project.DataAccess.Entities;
using System;
using System.Threading.Tasks;

namespace Project.DataAccess.Interfaces
{
    public interface IBookInOrderRepository : IBaseRepository<BookInOrder>
    {
        Task<BookInOrder> GetByOrderId(Guid id);
        Task<BookInOrder> GetBookByBookId(Guid id);
    }
}

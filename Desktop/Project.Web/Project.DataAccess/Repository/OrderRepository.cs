using Project.DataAccess.Interfaces;
using Project.DataAccess.Entities;

namespace Project.DataAccess.Repository
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(DataBaseContext context) : base(context)
        {
        }
    }
}

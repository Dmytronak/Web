using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;

namespace Project.DataAccess.Repository
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(DataBaseContext context) : base(context)
        {
        }
    }
}

using BlackJack.DataAccess.Entities;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Interfaces
{
    public interface IPlayerRepository : IBaseRepository<Player>
    {
        Task<Player> GetByUserId(string userId);
    }
}

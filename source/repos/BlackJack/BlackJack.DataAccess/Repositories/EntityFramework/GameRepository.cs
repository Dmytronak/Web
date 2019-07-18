using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class GameRepository : BaseRepository<Game>, IGameRepository
    {
        public GameRepository(ApplicationContext context) : base(context)
        {
        }
    }
   
}


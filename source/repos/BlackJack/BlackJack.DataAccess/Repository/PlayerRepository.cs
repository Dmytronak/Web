using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;


namespace BlackJack.DataAccess.Repository
{
    public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
    { 
        public PlayerRepository(ApplicationContext context) : base(context)
        {
        }

    }
}

using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class PlayerStepRepository : BaseRepository<PlayerStep>, IPlayerStepRepository
    {
        public PlayerStepRepository(ApplicationContext context) : base(context)
        {

        }
    }
}

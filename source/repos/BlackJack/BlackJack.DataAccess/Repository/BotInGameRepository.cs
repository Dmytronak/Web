using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class BotInGameRepository : BaseRepository<BotInGame>, IBotInGameRepository
    {
        public BotInGameRepository(ApplicationContext context) : base(context)
        {
        }
    }
}



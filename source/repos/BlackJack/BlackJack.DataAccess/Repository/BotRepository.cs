using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class BotRepository: BaseRepository<Bot>, IBotRepository
    {
        public BotRepository(ApplicationContext context) : base(context)
        {
        }
    }
}



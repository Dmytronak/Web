using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class BotRepository: BaseRepository<Bot>, IBotRepository
    {
        public BotRepository(ApplicationContext context) : base(context)
        {
        }
    }
}



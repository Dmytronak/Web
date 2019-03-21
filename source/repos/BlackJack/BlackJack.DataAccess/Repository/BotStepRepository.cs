using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class BotStepRepository : BaseRepository<BotStep>, IBotStepRepository
    {
        public BotStepRepository(ApplicationContext context) : base(context)
        {
        }
    }
}

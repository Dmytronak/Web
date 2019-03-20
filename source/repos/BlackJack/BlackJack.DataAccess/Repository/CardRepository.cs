using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class CardRepository : BaseRepository<Card>, ICardRepository
    {
        public CardRepository(ApplicationContext context) : base(context)
        {
        }
    }
}

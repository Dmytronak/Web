using BlackJack.DataAccess.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Helpers.Interfaces
{
    public interface ICardHelper
    {
        Task <List<Card>> Shuffle();
    }
}

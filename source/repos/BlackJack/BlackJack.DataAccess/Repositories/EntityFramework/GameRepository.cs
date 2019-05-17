using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.EntityFramework
{
    public class GameRepository : BaseRepository<Game>, IGameRepository
    {
        public GameRepository(ApplicationContext context) : base(context)
        {
        }
    }
   
}


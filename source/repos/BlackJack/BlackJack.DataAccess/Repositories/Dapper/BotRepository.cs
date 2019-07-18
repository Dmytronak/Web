using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using System.Data;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class BotRepository : BaseRepository<Bot>, IBotRepository
    {
        public BotRepository(IDbConnection connection) : base(connection)
        {
        }
    }
}



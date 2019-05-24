using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class BotRepository : BaseRepository<Bot>, IBotRepository
    {
        public BotRepository(IDbConnection connection) : base(connection)
        {
        }
    }
}



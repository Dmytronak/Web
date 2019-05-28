using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class GameRepository : BaseRepository<Game>, IGameRepository
    {
        public GameRepository(IDbConnection connection) : base(connection)
        {
        }
    }
}
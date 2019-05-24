using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Dapper;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
    {
        public PlayerRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<Player> GetByUserId(string userId)
        {
            string sql = "SELECT * FROM Players A WHERE A.UserId = @UserId";
            var result = await _connection.QueryFirstOrDefaultAsync<Player>(sql, new { UserId = userId });
            return result;
        }

    }
}

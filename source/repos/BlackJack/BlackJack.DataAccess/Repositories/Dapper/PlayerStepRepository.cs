using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Dapper
{

    public class PlayerStepRepository : BaseRepository<PlayerStep>, IPlayerStepRepository
    {
        public PlayerStepRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<List<PlayerStep>> GetByGameId(Guid gameId)
        {
            string sql = "SELECT * FROM PlayerSteps A WHERE A.GameId = @GameId";
            var result = (await _connection.QueryAsync<PlayerStep>(sql, new { GameId = gameId })).ToList();
            return result;
        }
    }
}
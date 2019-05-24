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
    public class CardRepository : BaseRepository<Card>, ICardRepository
    {
        public CardRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<List<Card>> GetByGameId(Guid gameId)
        {
            string sql = "SELECT * FROM Cards A WHERE A.GameId = @GameId";
            var result = (await _connection.QueryAsync<Card>(sql, new { GameId = gameId })).ToList();
            return result;
        }

    }
}
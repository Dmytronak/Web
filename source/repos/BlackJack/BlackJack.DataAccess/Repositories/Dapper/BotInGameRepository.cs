using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System.Linq;
using Dapper;
using System.Data.SqlClient;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class BotInGameRepository : BaseRepository<BotInGame>, IBotInGameRepository
    {
        public BotInGameRepository(IDbConnection connection) : base(connection)
        {

        }
        public async Task<List<BotInGame>> GetByGameId(Guid gameId)
        {
            string sql = @"SELECT * 
                         FROM BotInGames BIG 
                         INNER JOIN Bots B 
                         ON BIG.BotId = B.Id
                         WHERE BIG.GameId = @GameId";
            var result = (await _connection.QueryAsync<BotInGame, Bot, BotInGame> 
                (sql, (big, b) => 
                {
                    big.Bot = b;
                    return big;
                } ,new
                {
                    GameId = gameId
                })).ToList();
            return result;
        }
    }
}
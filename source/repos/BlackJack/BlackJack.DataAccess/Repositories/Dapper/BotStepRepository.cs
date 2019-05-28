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
    public class BotStepRepository : BaseRepository<BotStep>, IBotStepRepository
    {
        public BotStepRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<List<BotStep>> GetByGameId(Guid gameId)
        {
            string sql = @"SELECT * 
                         FROM BotSteps BS 
                         INNER JOIN Bots B 
                         ON BS.BotId = B.Id
                         WHERE BS.GameId = @GameId";
            var result = (await _connection.QueryAsync<BotStep, Bot, BotStep> 
                (sql, (bs, b) => 
                {
                    bs.Bot = b;
                    return bs;
                }, new
                {
                    GameId = gameId
                })).ToList();
            return result;
        }

        public async Task<List<BotStep>> GetByBotId(Guid botId)
        {
            string sql = @"SELECT * 
                         FROM BotSteps BS 
                         WHERE BS.BotId = @BotId";
            var result = (await _connection.QueryAsync<BotStep>
                (sql, new
                {
                    BotId = botId
                })).ToList();
            return result;
        }
    }
}
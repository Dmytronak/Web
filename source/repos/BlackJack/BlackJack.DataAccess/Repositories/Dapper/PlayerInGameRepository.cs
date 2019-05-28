using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public class PlayerInGameRepository : BaseRepository<PlayerInGame>, IPlayerInGameRepository
    {
        public PlayerInGameRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<List<PlayerInGame>> GetByGameId(Guid gameId)
        {
            string sql = @"SELECT * 
                         FROM PlayerInGames PIG 
                         INNER JOIN Players P 
                         ON PIG.PlayerId = P.Id 
                         WHERE PIG.GameId = @GameId";
            var result = (await _connection.QueryAsync<PlayerInGame,Player,PlayerInGame>
                (sql, (pig, p) => 
                {
                    pig.Player = p;
                    return pig;
                }, new
                {
                    GameId = gameId
                })).ToList();
            return result;
        }
        public async Task<List<PlayerInGame>> GetByUserId(string userId)
        {
            string sql = @"SELECT * 
                         FROM PlayerInGames PIG 
                         INNER JOIN Players P 
                         ON PIG.PlayerId = P.Id 
                         INNER JOIN Games G 
                         ON PIG.GameId = G.Id 
                         WHERE P.UserId = @UserId";
            var result = (await _connection.QueryAsync<PlayerInGame, Player, Game, PlayerInGame>
                (sql, (pig, p, g) => 
                {
                    pig.Player = p;
                    pig.Game = g;
                    return pig;
                }, new
                {
                    UserId = userId
                })).ToList();
            return result;
        }
        public async Task<PlayerInGame> GetActiveByUserId(string userId)
        {
            string sql = @"SELECT * 
                         FROM PlayerInGames PIG 
                         INNER JOIN Players P 
                         ON PIG.PlayerId = P.Id 
                         INNER JOIN  Games G 
                         ON PIG.GameId = G.Id 
                         WHERE P.UserId = @UserId
						 AND G.Status = @Status 
						 OR P.UserId = @UserId
						 AND G.Status = @Status2";
            var result = (await _connection.QueryAsync<PlayerInGame, Player, Game, PlayerInGame>
                (sql, (pig, p, g) => 
                {
                    pig.Player = p;
                    pig.Game = g;
                    return pig;
                }, new
                {
                    UserId = userId,
                    Status = Enums.StatusType.New,
                    Status2 = Enums.StatusType.Continue
                })).FirstOrDefault();  
            return result;
        }
    }
}
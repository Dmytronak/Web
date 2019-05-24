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
    public class PlayerInGameRepository : BaseRepository<PlayerInGame>, IPlayerInGameRepository
    {
        public PlayerInGameRepository(IDbConnection connection) : base(connection)
        {
        }
        public async Task<List<PlayerInGame>> GetByGameId(Guid gameId)
        {
            string sql = "SELECT * FROM PlayerInGames A INNER JOIN Players B on A.PlayerId = B.Id WHERE A.GameId = @GameId";
            var result = (await _connection.QueryAsync<PlayerInGame,Player,PlayerInGame>(sql, (a, b) => { a.Player = b; return a; }, new { GameId = gameId })).ToList();
            return result;
        }
        public async Task<List<PlayerInGame>> GetByUserId(string userId)
        {
            string sql = "SELECT * FROM PlayerInGames A INNER JOIN Players B on A.PlayerId = B.Id INNER JOIN  Games C on A.GameId = C.Id WHERE B.UserId = @UserId";
            var result = (await _connection.QueryAsync<PlayerInGame, Player, Game, PlayerInGame>(sql, (a, b, c) => { a.Player = b; a.Game = c; return a; }, new { UserId = userId })).ToList();
            return result;
        }
        public async Task<PlayerInGame> GetActiveGameByUserId(string userId)
        {
            string sql = "SELECT * FROM PlayerInGames A INNER JOIN Players B on A.PlayerId = B.Id INNER JOIN  Games C on A.GameId = C.Id WHERE B.UserId = @UserId AND C.Status = @Status OR C.Status = @Status2 ";
            var result = (await _connection.QueryAsync<PlayerInGame, Game, PlayerInGame>(sql, (a, b) => { a.Game = b; return a; }, new { UserId = userId, Status = Enums.StatusType.New, Status2 = Enums.StatusType.Continue })).FirstOrDefault();  
            return result;
        }
    }
}
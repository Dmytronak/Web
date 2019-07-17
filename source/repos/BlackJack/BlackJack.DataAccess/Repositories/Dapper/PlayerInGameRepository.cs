using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
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
        public async Task<List<PlayerInGame>> GetFilteredByUserId(string userId, string searchString,int pageNumber,int pageSize)
        {
            var convertedStatusType = GetConvertedStatusType(searchString);
            string sql = "GetFilteredGames";
            var games = (await _connection.QueryAsync<Game>
                (sql, new
                {
                    PageNumber = pageNumber,
                    UserId = userId,
                    Winner = searchString,
                    Status = convertedStatusType,
                    NumberOfBots = searchString,
                    PageSize = pageSize
                },
                commandType: CommandType.StoredProcedure))
                .ToList();
            var result = games
                .Select(game => new PlayerInGame()
                {
                    Game = game,
                }).ToList();
            return result;
        }
        public async Task<int> GetFilteredCountByUserId(string userId, string searchString)
        {
            var convertedStatusType = GetConvertedStatusType(searchString);
            string sql = @"SELECT COUNT(DISTINCT UserGames.Id)
                         FROM (SELECT  
                         G.Id,
                         G.CreationAt,
                         G.NumberOfBots,
                         G.Status,
                         G.Winner
                         FROM PlayerInGames PIG 
                         INNER JOIN Players P 
                         ON PIG.PlayerId = P.Id 
                         INNER JOIN Games G 
                         ON PIG.GameId = G.Id 		
                         WHERE P.UserId = @UserId) AS UserGames
						 WHERE UserGames.Winner LIKE CONCAT(@Winner,'%') OR UserGames.Winner IS NOT NULL
						 AND UserGames.Status LIKE CONCAT(@Status,'%') OR UserGames.Status IS NULL
						 AND UserGames.NumberOfBots IS NULL OR UserGames.NumberOfBots LIKE CONCAT(@NumberOfBots,'%')";
            var result = await _connection.ExecuteScalarAsync<int>(sql,new
            {
                Winner = searchString,
                Status = convertedStatusType,
                NumberOfBots = searchString,
                UserId = userId
            });
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
                    Status = StatusType.New,
                    Status2 = StatusType.Continue
                })).FirstOrDefault();  
            return result;
        }
        private int GetConvertedStatusType(string searchString)
        {
            var result = Enum.GetNames(typeof(StatusType))
                .ToList()
                .FindIndex(x => x.Contains(searchString));
            return result;
        }
    }
}
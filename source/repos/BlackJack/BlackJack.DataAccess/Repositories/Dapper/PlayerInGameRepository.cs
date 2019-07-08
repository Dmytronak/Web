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
        public async Task<List<PlayerInGame>> GetFilteredGameByUserId(string userId, string searchString,int pageNumber)
        {
            var convertedStatusType = GetConvertedStatusType(searchString);
            searchString = $"%{searchString}%";
            string sql = "GetFilteredGames";
            var games = (await _connection.QueryAsync<Game>
                (sql, new
                {
                    PageNumber = pageNumber,
                    UserId = userId,
                    Winner = searchString,
                    Status = convertedStatusType,
                    NumberOfBots = searchString
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
        public async Task<int> GetCountByUserId(string userId, string searchString)
        {
            var filteredStatusType = GetConvertedStatusType(searchString);
            searchString = $"%{searchString}%";
            string sql = @"SELECT COUNT(DISTINCT GameId) 
                         FROM PlayerInGames PIG 
                         INNER JOIN Players P 
                         ON PIG.PlayerId = P.Id 
                         INNER JOIN Games G 
                         ON PIG.GameId = G.Id 
                         WHERE P.UserId = @UserId
						 AND G.Winner LIKE @Winner OR G.Winner IS NOT NULL
						 AND G.Status LIKE @Status OR G.Status IS NULL
						 AND G.NumberOfBots IS NULL OR G.NumberOfBots LIKE @NumberOfBots";
            var result = await _connection.ExecuteScalarAsync<int>(sql,new
            {
                Winner = searchString,
                Status = filteredStatusType,
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
                    Status = Enums.StatusType.New,
                    Status2 = Enums.StatusType.Continue
                })).FirstOrDefault();  
            return result;
        }
        private string GetConvertedStatusType(string searchString)
        {
            searchString = $"{searchString}";
            var statusNames = Enum.GetNames(typeof(StatusType));
            var filteredStatusList = statusNames
                .Select((str, index) => str
                .Contains(searchString, StringComparison.InvariantCulture) ? index : -1)
                .Where(iElement => iElement >= 0)
                .ToList();
            if (filteredStatusList.Count > 1 || filteredStatusList.Count==0)
            {
                return "% %";
            }
            var response = $"%{filteredStatusList.FirstOrDefault()}%";
            return response;
        }
    }
}
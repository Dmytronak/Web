using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IPlayerInGameRepository : IBaseRepository<PlayerInGame>
    {
        Task<List<PlayerInGame>> GetPlayersInGame(Guid GameId);
        Task<List<PlayerInGame>> GetGamesAndPlayers(Guid PlayerId);
        Task<List<PlayerInGame>> GetGames(Guid UserId);
    }
}

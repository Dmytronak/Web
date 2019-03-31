using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class PlayerInGame : BaseEntity
    {
        public int PlayerScoreValue { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }

        [ForeignKey("Player")]
        public Guid PlayerId { get; set; }
        public virtual Player Players { get; set; }
    }
}
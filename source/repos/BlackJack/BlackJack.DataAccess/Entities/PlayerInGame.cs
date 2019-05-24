using Dapper.Contrib.Extensions;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class PlayerInGame : BaseEntity
    {
        public int Score { get; set; }

        public Guid GameId { get; set; }
        [ForeignKey("GameId")]
        [Computed]
        public virtual Game Game { get; set; }

        public Guid PlayerId { get; set; }
        [ForeignKey("PlayerId")]
        [Computed]
        public virtual Player Player { get; set; }
    }
}
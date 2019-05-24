using Dapper.Contrib.Extensions;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotInGame : BaseEntity
    {
        public int Score { get; set; }

        public Guid GameId { get; set; }
        [ForeignKey("GameId")]
        [Computed]
        public virtual Game Game { get; set; }

        public Guid BotId { get; set; }
        [ForeignKey("BotId")]
        [Computed]
        public virtual Bot Bot { get; set; }
    }
}

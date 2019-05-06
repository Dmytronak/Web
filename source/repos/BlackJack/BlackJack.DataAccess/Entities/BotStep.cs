using BlackJack.DataAccess.Enums;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotStep : BaseEntity
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }

        public Guid GameId { get; set; }
        [ForeignKey("GameId")]
        public virtual Game Game { get; set; }

        public Guid BotId { get; set; }
        [ForeignKey("BotId")]
        public virtual Bot Bot { get; set; }
    }
}

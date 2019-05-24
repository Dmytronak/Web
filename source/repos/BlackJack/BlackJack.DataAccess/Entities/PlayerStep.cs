using BlackJack.DataAccess.Enums;
using Dapper.Contrib.Extensions;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class PlayerStep : BaseEntity
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }

        public Guid GameId { get; set; }
        [ForeignKey("GameId")]
        [Computed]
        public virtual Game Game { get; set; }
    }
}

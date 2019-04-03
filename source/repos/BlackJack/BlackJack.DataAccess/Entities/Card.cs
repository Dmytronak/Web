using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Card : BaseEntity
    {
        public CardRank Rank { get; set; }
        public CardSuit Suit { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }

    }

    public enum CardRank
    {
        Ace = 1,
        Two = 2,
        Three = 3,
        Four = 4,
        Five = 5,
        Six = 6,
        Seven = 7,
        Eight = 8,
        Nine = 9,
        Ten = 10,
        Jack=11,
        Queen=12,
        King=13
    }

    public enum CardSuit
    {
        Club,
        Diamond,
        Heart,
        Spade
    }
}
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
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eight,
        Nine,
        Ten,
        Jack,
        Queen,
        King
    }

    public enum CardSuit
    {
        Club,
        Diamond,
        Heart,
        Spade
    }
}
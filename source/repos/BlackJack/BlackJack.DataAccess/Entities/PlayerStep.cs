﻿using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class PlayerStep : BaseEntity
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }
    }
}

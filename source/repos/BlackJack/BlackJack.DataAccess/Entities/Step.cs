﻿using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Step : BaseEntity
    {
        public double StepRate { get; set; }
        public string StepStatus { get; set; }
        public double StepScore { get; set; }
        public string StepRank { get; set; }
        public string StepSuit { get; set; }

        [ForeignKey("Player")]
        public Guid PlayerId { get; set; }
        public virtual Player Players { get; set; }
    }
}

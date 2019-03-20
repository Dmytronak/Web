using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotStep : BaseEntity
    {
        public double StepRate { get; set; }
        public string StepStatus { get; set; }
        public string StepScore { get; set; }
        public string StepRank { get; set; }
        public string StepSuit { get; set; }

        [ForeignKey("Bot")]
        public Guid BotId { get; set; }
        public virtual Bot Bots { get; set; }


    }
}

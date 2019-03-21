using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotStep : BaseEntity
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }

        [ForeignKey("Bot")]
        public Guid BotId { get; set; }
        public virtual Bot Bots { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }
    }
}

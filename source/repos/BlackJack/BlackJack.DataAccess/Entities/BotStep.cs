using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotStep : BaseEntity
    {
        public CardRank BotStepRank { get; set; }
        public CardSuit BotStepSuit { get; set; }

        [ForeignKey("Bot")]
        public Guid BotId { get; set; }
        public virtual Bot Bots { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }
    }
}

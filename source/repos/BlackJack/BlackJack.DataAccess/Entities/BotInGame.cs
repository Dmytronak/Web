using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class BotInGame : BaseEntity
    {
        public int BotScoreValue { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }

        [ForeignKey("Bot")]
        public Guid BotId { get; set; }
        public virtual Bot Bots { get; set; }
    }
}

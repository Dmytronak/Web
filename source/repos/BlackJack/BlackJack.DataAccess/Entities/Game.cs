using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Game : BaseEntity
    {
        public int NumberOfPlayers { get; set; }
        public double Rate { get; set; }
        public double Balance { get; set; }
        public string Winner { get; set; }
        public string Loser { get; set; }

        [ForeignKey("Player")]
        public Guid PlayerId { get; set; }
        public virtual Player Players { get; set; }

        [ForeignKey("Bot")]
        public Guid BotId { get; set; }
        public virtual Bot Bots { get; set; }

        [ForeignKey("Card")]
        public Guid CardId { get; set; }
        public virtual Card Cards { get; set; }

    }
}

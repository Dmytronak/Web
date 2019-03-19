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

        [ForeignKey("Player")]
        public Guid PlayerId { get; set; }
        public virtual Player Players { get; set; }

        [ForeignKey("Round")]
        public Guid RoundId { get; set; }
        public virtual Round Rounds { get; set; }

    }
}

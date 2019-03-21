using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Game : BaseEntity
    {
        public int NumberOfBots { get; set; }
        public string Winner { get; set; }
        public string Status { get; set; }

        [ForeignKey("Player")]
        public Guid PlayerId { get; set; }
        public virtual Player Players { get; set; }

        [ForeignKey("PlayerStep")]
        public Guid PlayerStepId { get; set; }
        public virtual PlayerStep PlayerSteps { get; set; }
    }
}

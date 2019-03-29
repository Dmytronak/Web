using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class PlayerStep : BaseEntity
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }

        [ForeignKey("Game")]
        public Guid GameId { get; set; }
        public virtual Game Games { get; set; }
    }
}

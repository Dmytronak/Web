using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Step : BaseEntity
    {
        public double CurentRate { get; set; }
        public double CurrentBalance { get; set; }

        [ForeignKey("Card")]
        public Guid CardId { get; set; }
        public virtual Card Cards { get; set; }

        [ForeignKey("Round")]
        public Guid RoundId { get; set; }
        public virtual Round Rounds { get; set; }
    }
}

using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Player : BaseEntity
    {
        public string Name { get; set; }
        public int Score { get; set; }


        [ForeignKey("User")]
        public Guid UserId { get; set; }
        public virtual User Users { get; set; }

    }
}

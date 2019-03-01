using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.DataAccess.Entities
{
    public class BookInOrder : BaseEntity
    {
        [ForeignKey("Book")]
        public Guid BookId { get; set; }
        public virtual Book Book { get; set; }

        [ForeignKey("Order")]
        public Guid OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}

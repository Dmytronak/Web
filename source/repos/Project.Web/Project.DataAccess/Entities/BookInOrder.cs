using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.DataAccess.Entities
{
    public class BookInOrder : BaseEntity
    {
        [ForeignKey("Book")]
        public Guid BookId { get; set; }
        public Book Book { get; set; }

        [ForeignKey("Order")]
        public Guid OrderId { get; set; }
        public Order Order { get; set; }
    }
}

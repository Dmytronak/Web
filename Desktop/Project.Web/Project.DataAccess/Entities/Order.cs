using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.DataAccess.Entities
{
    public class Order : BaseEntity
    {
        public string User { get; set; }
        public string Address { get; set; }
        public string ContactPhone { get; set; }
        [ForeignKey("Book")]
        public Guid BookId { get; set; }
        //[ForeignKey("BookId")]
        public Book Book { get; set; }
    }
}

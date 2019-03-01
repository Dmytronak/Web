using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project.DataAccess.Entities
{
    public class Book : BaseEntity
    {  
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }

        [ForeignKey("Category")]
        public Guid CategoryId { get; set; }
        public virtual Category Category { get; set; }
    } 
}

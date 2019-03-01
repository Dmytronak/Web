using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project.DataAccess.Entities
{
    public class Category : BaseEntity
    {

        public string CategoryName { get; set; }

        [ForeignKey("Book")]
        public Guid BookId { get; set; }
        public virtual Book Book { get; set; }

    }
}

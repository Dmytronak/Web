using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project.DataAccess.Entities
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
    }
}

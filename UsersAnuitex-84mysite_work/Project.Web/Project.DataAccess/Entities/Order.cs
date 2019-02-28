using System;

namespace Project.DataAccess.Entities
{
    public class Order : BaseEntity
    {
        public string User { get; set; }
        public string Address { get; set; }
        public string ContactPhone { get; set; }
    }
}

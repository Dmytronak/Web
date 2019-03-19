using System;

namespace BlackJack.DataAccess.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTime CreationAt { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            CreationAt = DateTime.UtcNow;
        }
    }
}


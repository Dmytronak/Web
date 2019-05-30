using Dapper.Contrib.Extensions;
using System;

namespace BlackJack.DataAccess.Entities
{
    public class BaseEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }
        public DateTime CreationAt { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            CreationAt = DateTime.UtcNow;
        }
    }
}


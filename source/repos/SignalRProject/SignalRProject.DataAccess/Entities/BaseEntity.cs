using System;
using System.ComponentModel.DataAnnotations;

namespace SignalRProject.DataAccess.Entities
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime CreationAt { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            CreationAt = DateTime.UtcNow;
        }
    }
}

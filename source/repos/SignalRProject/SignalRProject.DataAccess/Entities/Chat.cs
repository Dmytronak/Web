using SignalRProject.DataAccess.Enums;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace SignalRProject.DataAccess.Entities
{
    public class Chat : BaseEntity
    {
        public string Name { get; set; }
        public ChatStatusType ChatStatusType { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        public Guid MessageId { get; set; }
        [ForeignKey("MessageId")]
        public virtual Message Message { get; set; }

    }
}

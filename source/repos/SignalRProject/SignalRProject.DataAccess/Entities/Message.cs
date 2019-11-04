using System.ComponentModel.DataAnnotations.Schema;

namespace SignalRProject.DataAccess.Entities
{
    public class Message : BaseEntity
    {
        public string MessageTitle { get; set; }
        public string MessageText { get; set; }

    }
}

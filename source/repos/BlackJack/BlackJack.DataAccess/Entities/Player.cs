using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Player : BaseEntity
    {
        public string Name { get; set; }
        
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        [Computed]
        public virtual User User { get; set; }
    }
}

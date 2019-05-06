using BlackJack.DataAccess.Enums;

namespace BlackJack.DataAccess.Entities
{
    public class Game : BaseEntity
    {
        public int NumberOfBots { get; set; }
        public string Winner { get; set; }
        public StatusType Status { get; set; }
    }
}

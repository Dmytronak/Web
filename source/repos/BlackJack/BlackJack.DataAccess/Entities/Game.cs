using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Game : BaseEntity
    {
        public int NumberOfBots { get; set; }
        public string Winner { get; set; }
        public string Status { get; set; }
    }
}

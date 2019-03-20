using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Bot : BaseEntity
    {
        public string BotName { get; set; }
        public int BotScore { get; set; }
        public double BotBalance { get; set; }
    }
}

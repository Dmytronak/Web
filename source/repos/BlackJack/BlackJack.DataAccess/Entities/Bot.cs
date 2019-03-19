using System;
using System.Collections.Generic;
using System.Text;

namespace BlackJack.DataAccess.Entities
{
    public class Bot : BaseEntity
    {
        public int BotMaxPlayers { get; set; }
        public string BotName { get; set; }
        public int BotScore { get; set; }
    }
}

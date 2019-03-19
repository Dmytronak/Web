using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackJack.DataAccess.Entities
{
    public class Round : BaseEntity
    {
        public double RoundCount { get; set; }
        public double CurentRate { get; set; }
        public double CurrentBalance { get; set; }

    }
}

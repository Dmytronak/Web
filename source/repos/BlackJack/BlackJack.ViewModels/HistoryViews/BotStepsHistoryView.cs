using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class BotStepsHistoryView
    {
        [Required(ErrorMessage = "GameId is required")]
        public Guid GameId { get; set; }
        public List<BotStepsHistoryViewItem> Bots { get; set; }

        public BotStepsHistoryView()
        {
            Bots= new List<BotStepsHistoryViewItem>();
        }
    }
    public class BotStepsHistoryViewItem
    {
        public string Name { get; set; }
        public List<BotCardViewItem> Steps { get; set; }
    }
 
    public class BotCardViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

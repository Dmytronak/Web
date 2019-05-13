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
        public List<BotBotStepsHistoryViewItem> Bots { get; set; }

        public BotStepsHistoryView()
        {
            Bots= new List<BotBotStepsHistoryViewItem>();
        }
    }
    public class BotBotStepsHistoryViewItem
    {
        public string Name { get; set; }
        public List<CardBotStepsHistoryViewItem> Steps { get; set; }
    }
 
    public class CardBotStepsHistoryViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

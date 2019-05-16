using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetBotStepsHistoryView
    {
        public Guid GameId { get; set; }
        public List<BotGetBotStepsHistoryViewItem> Bots { get; set; }

        public GetBotStepsHistoryView()
        {
            Bots= new List<BotGetBotStepsHistoryViewItem>();
        }
    }
    public class BotGetBotStepsHistoryViewItem
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

using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetPlayerStepsHistoryView
    {
        public Guid GameId { get; set; }
        public string Name { get; set; }
        public List<CardGetPlayerStepsHistoryViewItem> Steps { get; set; }

        public GetPlayerStepsHistoryView()
        {
            Steps = new List<CardGetPlayerStepsHistoryViewItem>();
        }
    }
    public class CardGetPlayerStepsHistoryViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

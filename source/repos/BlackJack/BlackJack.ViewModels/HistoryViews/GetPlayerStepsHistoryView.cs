using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetPlayerStepsHistoryView
    {
        public Guid GameId { get; set; }
        public string Name { get; set; }
        public List<CardGetPlayerStepsHistoryViewItem> PlayerSteps { get; set; }

        public GetPlayerStepsHistoryView()
        {
            PlayerSteps = new List<CardGetPlayerStepsHistoryViewItem>();
        }
    }
    public class CardGetPlayerStepsHistoryViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

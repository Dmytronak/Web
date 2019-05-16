using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetPlayerStepsHistoryView
    {
        public Guid GameId { get; set; }
        public string Name { get; set; }
        public List<PlayerGetPlayerStepsHistoryViewItem> PlayerSteps { get; set; }

        public GetPlayerStepsHistoryView()
        {
            PlayerSteps = new List<PlayerGetPlayerStepsHistoryViewItem>();
        }
    }
    public class PlayerGetPlayerStepsHistoryViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class PlayerStepsHistoryView
    {
        public List<PlayerStepsHistoryViewItem> PlayerStepsOfGame { get; set; }

        public PlayerStepsHistoryView()
        {
            PlayerStepsOfGame = new List<PlayerStepsHistoryViewItem>();
        }

    }

    public class PlayerStepsHistoryViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

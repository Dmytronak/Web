using System;
using System.Collections.Generic;
using System.Text;

namespace BlackJack.ViewModels.HistoryViews
{
    public class BotStepsHistoryView
    {
        public List<BotStepsHistoryViewItem> BotStepsOfGame { get; set; }

        public BotStepsHistoryView()
        {
            BotStepsOfGame = new List<BotStepsHistoryViewItem>();
        }

    }
    public class BotStepsHistoryViewItem
    {
        public string BotName { get; set; }
        public List<BotCardViewItem> BotStepsOfGame { get; set; }
    }
 
    public class BotCardViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

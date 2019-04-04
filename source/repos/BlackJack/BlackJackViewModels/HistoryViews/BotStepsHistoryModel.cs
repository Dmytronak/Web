using System;
using System.Collections.Generic;
using System.Text;

namespace BlackJack.ViewModels.HistoryViews
{
    public class BotStepsHistoryModel
    {
        public List<BotStepsOfGmaeModelItem> BotStepsOfGame { get; set; }

        public BotStepsHistoryModel()
        {
            BotStepsOfGame = new List<BotStepsOfGmaeModelItem>();
        }

    }
    public class BotStepsOfGmaeModelItem
    {
        public string BotName { get; set; }
        public List<BotCardsModelItem> BotStepsOfGame { get; set; }
    }
 
    public class BotCardsModelItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

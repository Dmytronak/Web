using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class PlayerStepsHistoryModel
    {
        public List<PlayerStepsOfGmaeModelItem> PlayerStepsOfGame { get; set; }

        public PlayerStepsHistoryModel()
        {
            PlayerStepsOfGame = new List<PlayerStepsOfGmaeModelItem>();
        }

    }

    public class PlayerStepsOfGmaeModelItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

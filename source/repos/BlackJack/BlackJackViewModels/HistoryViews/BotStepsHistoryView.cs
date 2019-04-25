using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class BotStepsHistoryView
    {
        [Required(ErrorMessage = "GameId is required")]
        public Guid GameId { get; set; }
        public List<BotStepsHistoryViewItem> BotSteps { get; set; }

        public BotStepsHistoryView()
        {
            BotSteps = new List<BotStepsHistoryViewItem>();
        }

    }
    public class BotStepsHistoryViewItem
    {
        public string BotName { get; set; }
        public List<BotCardViewItem> BotSteps { get; set; }
    }
 
    public class BotCardViewItem
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
}

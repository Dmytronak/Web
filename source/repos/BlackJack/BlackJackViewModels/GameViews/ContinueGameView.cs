using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class ContinueGameView
    {
        [Required(ErrorMessage = "PlayerId is required")]
        public Guid PlayerId { get; set; }
        [Required(ErrorMessage = "GameId is required")]
        public Guid GameId { get; set; }

        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
      
        public List<ContinueGamePlayerCardsViewItem> ContinueGamePlayerCards { get; set; }
        public List<ContinueGameBotsViewItem> ContinueGameBots { get; set; }

        public ContinueGameView()
        {
            ContinueGameBots = new List<ContinueGameBotsViewItem>();
            ContinueGamePlayerCards = new List<ContinueGamePlayerCardsViewItem>();
        }
    }

    public class ContinueGamePlayerCardsViewItem
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class ContinueGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<ContinueGameBotCardsViewItem> ContinueBotCards { get; set; }
    }
    
    public class ContinueGameBotCardsViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
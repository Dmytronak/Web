using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class ContinueGameModel
    {
        [Required]
        public Guid PlayerId { get; set; }
        [Required]
        public Guid GameId { get; set; }

        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
      
        public List<ContinueGamePlayerCardsItem> ContinueGamePlayerCards { get; set; }
        public List<ContinueGameBotsItem> ContinueGameBots { get; set; }

        public ContinueGameModel()
        {
            ContinueGameBots = new List<ContinueGameBotsItem>();
            ContinueGamePlayerCards = new List<ContinueGamePlayerCardsItem>();
        }
    }

    public class ContinueGamePlayerCardsItem
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class ContinueGameBotsItem
    {
        public string BotName { get; set; }
        public List<ContinueGameBotCardsItem> ContinueBotCards { get; set; }
    }
    
    public class ContinueGameBotCardsItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
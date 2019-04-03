using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameModel
    {
        [Required]
        public Guid PlayerId { get; set; }
        [Required]
        public Guid GameId { get; set; }


        public string PlayerName { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }

        public List<EndGamePlayerCardsItem> EndGamePlayerCards { get; set; }
        public List<EndGameBotsItem> EndGameBots { get; set; }

        public EndGameModel()
        {
            EndGameBots = new List<EndGameBotsItem>();
            EndGamePlayerCards = new List<EndGamePlayerCardsItem>();
        }
    }

    public class EndGamePlayerCardsItem
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class EndGameBotsItem
    {
        public string BotName { get; set; }
        public List<EndGameBotCardsItem> ContinueBotCards { get; set; }
    }

    public class EndGameBotCardsItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
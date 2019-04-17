using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameView
    {
        [Required]
        public Guid PlayerId { get; set; }
        [Required]
        public Guid GameId { get; set; }


        public string PlayerName { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }

        public List<EndGamePlayerCardsViewItem> EndGamePlayerCards { get; set; }
        public List<EndGameBotsViewItem> EndGameBots { get; set; }

        public EndGameView()
        {
            EndGameBots = new List<EndGameBotsViewItem>();
            EndGamePlayerCards = new List<EndGamePlayerCardsViewItem>();
        }
    }

    public class EndGamePlayerCardsViewItem
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class EndGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<EndGameBotCardsViewItem> ContinueBotCards { get; set; }
    }

    public class EndGameBotCardsViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
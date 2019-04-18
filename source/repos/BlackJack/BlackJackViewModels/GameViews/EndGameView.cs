using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameView
    {
        [Required(ErrorMessage = "PlayerId is required")]
        public Guid PlayerId { get; set; }
        [Required(ErrorMessage = "GameId is required")]
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
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
    public class EndGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<EndGameBotCardsViewItem> ContinueBotCards { get; set; }
    }

    public class EndGameBotCardsViewItem
    {
        public CardRank BotStepRank { get; set; }
        public CardSuit BotStepSuit { get; set; }
    }
}
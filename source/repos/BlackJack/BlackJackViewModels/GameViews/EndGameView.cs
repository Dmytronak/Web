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

        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }

        public List<EndGameCardsViewItem> PlayerCards { get; set; }
        public List<EndGameBotsViewItem> Bots { get; set; }

        public EndGameView()
        {
            Bots = new List<EndGameBotsViewItem>();
            PlayerCards = new List<EndGameCardsViewItem>();
        }
    }

    public class EndGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<EndGameCardsViewItem> BotCards { get; set; }
    }

    public class EndGameCardsViewItem
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
}
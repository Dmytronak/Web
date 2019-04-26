using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
        [Required(ErrorMessage = "PlayerId is required")]
        public Guid PlayerId { get; set; }

        [Required(ErrorMessage = "Numbers of bots is required")]
        [Range(1, 5,ErrorMessage ="Range from 1 to 5")]
        public int NumberOfBots { get; set; }

        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
        public List<PlayGameCardsViewItem> PlayerCards { get; set; }
        public List<PlayGameBotsViewItem> Bots { get; set; }

        public PlayGameView()
        {
            PlayerCards = new List<PlayGameCardsViewItem>();
            Bots = new List<PlayGameBotsViewItem>();
        }
    }

    public class PlayGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<PlayGameCardsViewItem> BotCards { get; set; }
    }
    public class PlayGameCardsViewItem
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
}
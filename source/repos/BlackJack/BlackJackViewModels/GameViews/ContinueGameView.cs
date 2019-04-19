using BlackJack.DataAccess.Entities;
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
      
        public List<ContinueGameCardsViewItem> PlayerCards { get; set; }
        public List<ContinueGameBotsViewItem> Bots { get; set; }

        public ContinueGameView()
        {
            Bots = new List<ContinueGameBotsViewItem>();
            PlayerCards = new List<ContinueGameCardsViewItem>();
        }
    }
    public class ContinueGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<ContinueGameCardsViewItem> BotCards { get; set; }
    }
    
    public class ContinueGameCardsViewItem
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
}
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
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

        public Enum Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
      
        public List<CardContinueGameViewItem> PlayerCards { get; set; }
        public List<BotContinueGameViewItem> Bots { get; set; }

        public ContinueGameView()
        {
            Bots = new List<BotContinueGameViewItem>();
            PlayerCards = new List<CardContinueGameViewItem>();
        }
    }
    public class BotContinueGameViewItem
    {
        public string Name { get; set; }
        public List<CardContinueGameViewItem> BotCards { get; set; }
    }
    
    public class CardContinueGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
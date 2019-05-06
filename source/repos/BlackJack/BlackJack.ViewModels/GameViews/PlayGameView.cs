using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
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

        public Enum Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
        public List<CardPlayGameViewItem> PlayerCards { get; set; }
        public List<BotPlayGameViewItem> Bots { get; set; }

        public PlayGameView()
        {
            PlayerCards = new List<CardPlayGameViewItem>();
            Bots = new List<BotPlayGameViewItem>();
        }
    }

    public class BotPlayGameViewItem
    {
        public string Name { get; set; }
        public List<CardPlayGameViewItem> BotCards { get; set; }
    }
    public class CardPlayGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
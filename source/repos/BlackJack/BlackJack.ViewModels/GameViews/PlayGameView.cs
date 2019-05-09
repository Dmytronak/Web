using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
   
        [Required(ErrorMessage = "Numbers of bots is required")]
        [Range(1, 5,ErrorMessage ="Range from 1 to 5")]
        public int NumberOfBots { get; set; }

        public string Email { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }

        public List<PlayerPlayGameViewItem> Player { get; set; }
        public List<BotPlayGameViewItem> Bots { get; set; }

        public PlayGameView()
        {
            Player = new List<PlayerPlayGameViewItem>();
            Bots = new List<BotPlayGameViewItem>();
        }
    }
    public class PlayerPlayGameViewItem
    {
        public string Name { get; set; }
        public List<CardPlayGameViewItem> Cards { get; set; }
    }
    public class BotPlayGameViewItem
    {
        public string Name { get; set; }
        public List<CardPlayGameViewItem> Cards { get; set; }
    }
    public class CardPlayGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
   
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }

        public PlayerPlayGameViewItem Player { get; set; }
        public List<BotPlayGameViewItem> Bots { get; set; }

        public PlayGameView()
        {
            Player = new PlayerPlayGameViewItem();
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
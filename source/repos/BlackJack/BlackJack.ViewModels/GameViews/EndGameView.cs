using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameView
    {
        public StatusType Status { get; set; }
        public string Winner { get; set; }

        public List<PlayerEndGameViewItem> Player { get; set; }
        public List<BotEndGameViewItem> Bots { get; set; }

        public EndGameView()
        {
            Bots = new List<BotEndGameViewItem>();
            Player = new List<PlayerEndGameViewItem>();
        }
    }
    public class PlayerEndGameViewItem
    {
        public string Name { get; set; }
        public List<CardEndGameViewItem> Cards { get; set; }
    }
    public class BotEndGameViewItem
    {
        public string Name { get; set; }
        public List<CardEndGameViewItem> Cards { get; set; }
    }

    public class CardEndGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
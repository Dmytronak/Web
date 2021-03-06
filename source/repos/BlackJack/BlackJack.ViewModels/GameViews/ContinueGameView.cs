﻿using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class ContinueGameView
    {
        public StatusType Status { get; set; }
        public string Winner { get; set; }
        public PlayerContinueGameView Player { get; set; }
        public List<BotContinueGameViewItem> Bots { get; set; }

        public ContinueGameView()
        {
            Bots = new List<BotContinueGameViewItem>();
            Player = new PlayerContinueGameView();
        }
    }
    public class BotContinueGameViewItem
    {
        public string Name { get; set; }
        public List<CardContinueGameViewItem> Cards { get; set; }
    }
    public class PlayerContinueGameView
    {
        public string Name { get; set; }
        public List<CardContinueGameViewItem> Cards { get; set; }
    }
    public class CardContinueGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
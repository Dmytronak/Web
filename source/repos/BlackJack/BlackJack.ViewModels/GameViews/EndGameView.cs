using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameView
    {
        public StatusType Status { get; set; }
        public string Winner { get; set; }
        public PlayerEndGameView Player { get; set; }
        public List<BotEndGameViewItem> Bots { get; set; }

        public EndGameView()
        {
            Bots = new List<BotEndGameViewItem>();
            Player = new PlayerEndGameView();
        }
    }
    public class PlayerEndGameView
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
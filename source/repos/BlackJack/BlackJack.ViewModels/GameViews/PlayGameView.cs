using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }

        public PlayerPlayGameView Player { get; set; }
        public List<BotPlayGameViewItem> Bots { get; set; }

        public PlayGameView()
        {
            Player = new PlayerPlayGameView();
            Bots = new List<BotPlayGameViewItem>();
        }
    }
    public class PlayerPlayGameView
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
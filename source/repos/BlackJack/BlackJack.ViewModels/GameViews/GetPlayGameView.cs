using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class GetPlayGameView
    {
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }

        public PlayerGetPlayGameView Player { get; set; }
        public List<BotGetPlayGameViewItem> Bots { get; set; }

        public GetPlayGameView()
        {
            Player = new PlayerGetPlayGameView();
            Bots = new List<BotGetPlayGameViewItem>();
        }
    }
    public class PlayerGetPlayGameView
    {
        public string Name { get; set; }
        public List<CardGetPlayGameViewItem> Cards { get; set; }
    }
    public class BotGetPlayGameViewItem
    {
        public string Name { get; set; }
        public List<CardGetPlayGameViewItem> Cards { get; set; }
    }
    public class CardGetPlayGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
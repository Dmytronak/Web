using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class GetEndGameView
    {
        public StatusType Status { get; set; }
        public string Winner { get; set; }
        public PlayerGetEndGameView Player { get; set; }
        public List<BotGetEndGameViewItem> Bots { get; set; }

        public GetEndGameView()
        {
            Bots = new List<BotGetEndGameViewItem>();
            Player = new PlayerGetEndGameView();
        }
    }
    public class PlayerGetEndGameView
    {
        public string Name { get; set; }
        public List<CardGetEndGameViewItem> Cards { get; set; }
    }
    public class BotGetEndGameViewItem
    {
        public string Name { get; set; }
        public List<CardGetEndGameViewItem> Cards { get; set; }
    }

    public class CardGetEndGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
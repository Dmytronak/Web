using BlackJack.DataAccess.Enums;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViews
{
    public class GetContinueGameView
    {
        public StatusType Status { get; set; }
        public string Winner { get; set; }
        public PlayerGetContinueGameView Player { get; set; }
        public List<BotGetContinueGameViewItem> Bots { get; set; }

        public GetContinueGameView()
        {
            Bots = new List<BotGetContinueGameViewItem>();
            Player = new PlayerGetContinueGameView();
        }
    }
    public class BotGetContinueGameViewItem
    {
        public string Name { get; set; }
        public List<CardGetContinueGameViewItem> Cards { get; set; }
    }
    public class PlayerGetContinueGameView
    {
        public string Name { get; set; }
        public List<CardGetContinueGameViewItem> Cards { get; set; }
    }
    public class CardGetContinueGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
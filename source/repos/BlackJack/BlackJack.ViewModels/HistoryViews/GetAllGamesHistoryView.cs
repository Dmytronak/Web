using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetAllGamesHistoryView
    {
        public List<GameGetAllGamesHistoryViewItem> Games { get; set; }

        public GetAllGamesHistoryView()
        {
            Games = new List<GameGetAllGamesHistoryViewItem>();
        }
    }
    public class GameGetAllGamesHistoryViewItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }
    }
}

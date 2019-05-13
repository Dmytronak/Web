using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetAllGamesHistoryView
    {
        public string Email { get; set; }
        public List<GameGetAllGamesHistoryView> Games { get; set; }

        public GetAllGamesHistoryView()
        {
            Games = new List<GameGetAllGamesHistoryView>();
        }
    }
    public class GameGetAllGamesHistoryView
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }
    }
}

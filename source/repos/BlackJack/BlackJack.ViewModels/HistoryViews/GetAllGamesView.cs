using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetAllGamesView
    {
        public string Email { get; set; }
        public List<GameGetAllGameViewItem> Games { get; set; }

        public GetAllGamesView()
        {
            Games = new List<GameGetAllGameViewItem>();
        }
    }
    public class GameGetAllGameViewItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public StatusType Status { get; set; }
        public string Winner { get; set; }
    }
}

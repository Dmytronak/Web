using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetAllGamesView
    {

        public List<GetAllGamesViewItem> Games { get; set; }

        public GetAllGamesView()
        {
            Games = new List<GetAllGamesViewItem>();
        }

    }

    public class GetAllGamesViewItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }
    }
}

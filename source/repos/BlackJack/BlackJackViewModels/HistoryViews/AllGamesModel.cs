using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class AllGamesModel
    {

        public List<AllGamesModelItem> Games { get; set; }

        public AllGamesModel()
        {
            Games = new List<AllGamesModelItem>();
        }

    }

    public class AllGamesModelItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }
    }
}

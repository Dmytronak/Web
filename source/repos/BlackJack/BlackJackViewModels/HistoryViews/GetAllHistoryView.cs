using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GetAllHistoryView
    {
        [Required]
        public Guid PlayerId { get; set; }

        public List<GetAllHistoryViewItem> Games { get; set; }

        public GetAllHistoryView()
        {
            Games = new List<GetAllHistoryViewItem>();
        }
    }
    public class GetAllHistoryViewItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
        public List<GetAllHistoryStepsViewItem> PlayerSteps { get; set; }
        public List<GetAllHistoryBotsViewItem> Bots { get; set; }
    }
    public class GetAllHistoryBotsViewItem
    {
        public string BotName { get; set; }

        public List<GetAllHistoryStepsViewItem> BotSteps { get; set; }

        public GetAllHistoryBotsViewItem()
        {
            BotSteps = new List<GetAllHistoryStepsViewItem>();
        }
    }
    public class GetAllHistoryStepsViewItem
    {
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
   
}

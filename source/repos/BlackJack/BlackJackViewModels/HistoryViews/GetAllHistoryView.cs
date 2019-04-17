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
        public List<GetAllHistoryPlayerStepsViewItem> HistoryPlayerSteps { get; set; }
        public List<GetAllHistoryBotsViewItem> HistoryBots { get; set; }
    }
    public class GetAllHistoryBotsViewItem
    {
        public string BotName { get; set; }

        public List<GetAllHistoryBotStepsViewItem> HistoryBotSteps { get; set; }

        public GetAllHistoryBotsViewItem()
        {
            HistoryBotSteps = new List<GetAllHistoryBotStepsViewItem>();
        }
    }
    public class GetAllHistoryPlayerStepsViewItem
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class GetAllHistoryBotStepsViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

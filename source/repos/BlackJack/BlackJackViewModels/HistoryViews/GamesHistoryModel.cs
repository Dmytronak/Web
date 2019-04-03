using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class GamesHistoryModel
    {
        [Required]
        public Guid PlayerId { get; set; }

        public List<GameHistoryItem> Games { get; set; }

        public GamesHistoryModel()
        {
            Games = new List<GameHistoryItem>();
        }
    }
    public class GameHistoryItem
    {
        public Guid Id { get; set; }
        public int NumberOfBots { get; set; }
        public string Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }
        public List<GameHistoryPlayerSteps> HistoryPlayerSteps { get; set; }
        public List<GameHistoryBots> HistoryBots { get; set; }
    }
    public class GameHistoryBots
    {
        public string BotName { get; set; }

        public List<GameHistoryBotSteps> HistoryBotSteps { get; set; }

        public GameHistoryBots()
        {
            HistoryBotSteps = new List<GameHistoryBotSteps>();
        }
    }
    public class GameHistoryPlayerSteps
    {
        public string StepRank { get; set; }
        public string StepSuit { get; set; }
    }
    public class GameHistoryBotSteps
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}

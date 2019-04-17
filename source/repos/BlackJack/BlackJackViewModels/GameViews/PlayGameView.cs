using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
        [Required]
        public Guid PlayerId { get; set; }

        [Required]
        [Range(1, 5,ErrorMessage ="Range from 1 to 5")]
        public int NumberOfBots { get; set; }

        public Guid GameId { get; set; }
        public string PlayerName { get; set; }
        public string StepRank { get; set; }
        public string StepSuit { get; set; }

        public List<PlayGameBotsViewItem> PlayGameBots { get; set; }

        public PlayGameView()
        {
            PlayGameBots = new List<PlayGameBotsViewItem>();
        }
    }

    public class PlayGameBotsViewItem
    {
        public string BotName { get; set; }
        public List<PlayGameBotCardsViewItem> PlayBotCards { get; set; }
    }
    public class PlayGameBotCardsViewItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
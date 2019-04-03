using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameModel
    {
        [Required]
        public Guid PlayerId { get; set; }

        [Required]
        [Range(1, 5)]
        [Display(Name = "NumberOfBots")]
        public int NumberOfBots { get; set; }

        public Guid GameId { get; set; }
        public string PlayerName { get; set; }
        public string StepRank { get; set; }
        public string StepSuit { get; set; }

        public List<PlayGameBotsItem> PlayGameBots { get; set; }

        public PlayGameModel()
        {
            PlayGameBots = new List<PlayGameBotsItem>();
        }
    }

    public class PlayGameBotsItem
    {
        public string BotName { get; set; }
        public List<PlayGameBotCardsItem> PlayBotCards { get; set; }
    }
    public class PlayGameBotCardsItem
    {
        public string BotStepRank { get; set; }
        public string BotStepSuit { get; set; }
    }
}
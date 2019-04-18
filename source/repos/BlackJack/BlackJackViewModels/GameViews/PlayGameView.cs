using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameView
    {
        [Required(ErrorMessage = "PlayerId is required")]
        public Guid PlayerId { get; set; }

        [Required(ErrorMessage = "Numbers of bots is required")]
        [Range(1, 5,ErrorMessage ="Range from 1 to 5")]
        public int NumberOfBots { get; set; }

        public Guid GameId { get; set; }
        public string PlayerName { get; set; }
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }

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
        public CardRank BotStepRank { get; set; }
        public CardSuit BotStepSuit { get; set; }
    }
}
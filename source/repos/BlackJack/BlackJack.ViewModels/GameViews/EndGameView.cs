using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameView
    {
        [Required(ErrorMessage = "PlayerId is required")]
        public Guid PlayerId { get; set; }
        [Required(ErrorMessage = "GameId is required")]
        public Guid GameId { get; set; }

        public Enum Status { get; set; }
        public string Winner { get; set; }
        public string PlayerName { get; set; }

        public List<CardEndGameViewItem> PlayerCards { get; set; }
        public List<BotEndGameViewItem> Bots { get; set; }

        public EndGameView()
        {
            Bots = new List<BotEndGameViewItem>();
            PlayerCards = new List<CardEndGameViewItem>();
        }
    }

    public class BotEndGameViewItem
    {
        public string Name { get; set; }
        public List<CardEndGameViewItem> BotCards { get; set; }
    }

    public class CardEndGameViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}
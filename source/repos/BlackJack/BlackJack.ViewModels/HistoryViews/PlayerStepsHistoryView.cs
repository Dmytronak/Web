using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.HistoryViews
{
    public class PlayerStepsHistoryView
    {
        [Required(ErrorMessage = "GameId is required")]
        public Guid GameId { get; set; }
        public List<PlayerStepsViewItem> PlayerStepsOfGame { get; set; }

        public PlayerStepsHistoryView()
        {
            PlayerStepsOfGame = new List<PlayerStepsViewItem>();
        }
    }
    public class PlayerStepsViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

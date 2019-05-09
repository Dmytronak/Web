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
        public string Name { get; set; }
        public List<PlayerStepsViewItem> PlayerSteps { get; set; }

        public PlayerStepsHistoryView()
        {
            PlayerSteps = new List<PlayerStepsViewItem>();
        }
    }
    public class PlayerStepsViewItem
    {
        public CardRankType Rank { get; set; }
        public CardSuitType Suit { get; set; }
    }
}

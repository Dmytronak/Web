using BlackJack.DataAccess.Entities;
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
        public CardRank StepRank { get; set; }
        public CardSuit StepSuit { get; set; }
    }
}

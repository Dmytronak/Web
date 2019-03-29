using System;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class EndGameModel
    {
        [Required]
        public Guid PlayerId { get; set; }
        [Required]
        public Guid GameId { get; set; }
    }
}

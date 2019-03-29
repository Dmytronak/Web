using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class PlayGameModel
    {
        [Required]
        [StringLength(20)]
        [Display(Name = "PlayerName")]
        public string Name { get; set; }

        [Required]
        [Range(1, 5)]
        [Display(Name = "NumberOfBots")]
        public int NumberOfBots { get; set; }

        [Required]
        public Guid PlayerId { get; set; }

    }
}

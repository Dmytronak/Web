using System;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class CreatePlayerGameView
    {
        [Required]
        [StringLength(20)]
      
        public string Name { get; set; }

        [Required]
      
        public string Email { get; set; }
    }
}

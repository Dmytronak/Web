using System;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class CreatePlayerGameView
    {
        [Required(ErrorMessage = "Name is required")]
        [StringLength(20,ErrorMessage = "Maximal string length is 20")]
        public string Name { get; set; }
        public string Email { get; set; }
        public Guid PlayerId { get; set; }
    }
}

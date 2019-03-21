using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class CreatePlayerGameModel
    {
        [Required]
        [StringLength(20)]
        [Display(Name = "PlayerName")]
        public string Name { get; set; }
    }
}

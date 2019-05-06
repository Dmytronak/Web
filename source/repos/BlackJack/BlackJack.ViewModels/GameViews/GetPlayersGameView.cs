using BlackJack.DataAccess.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class GetPlayersGameView
    {
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        public List<Player> Players { get; set; }

        public GetPlayersGameView()
        {
            Players = new List<Player>();
        }
    }
   

}

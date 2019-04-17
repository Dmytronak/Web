using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlackJack.ViewModels.GameViews
{
    public class GetPlayersGameModel
    {
        public List<Player> Players { get; set; }

        public GetPlayersGameModel()
        {
            Players = new List<Player>();
        }
    }
   

}

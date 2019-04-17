using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlackJack.ViewModels.GameViews
{
    public class GetPlayersGameView
    {
        public List<Player> Players { get; set; }

        public GetPlayersGameView()
        {
            Players = new List<Player>();
        }
    }
   

}

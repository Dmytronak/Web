using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class GetPlayersGameView
    {
        public string Email { get; set; }

        public List<PlayerGetPlayerGameViewItem> Players { get; set; }

        public GetPlayersGameView()
        {
            Players = new List<PlayerGetPlayerGameViewItem>();
        }
    }

    public class PlayerGetPlayerGameViewItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
    }
}

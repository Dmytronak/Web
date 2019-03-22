﻿using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.GameViews
{
    public class CreateBotGameModel
    {
        [Required]
        [StringLength(20)]
        [Display(Name = "Bot Name")]
        public string BotName { get; set; }
       
    }
}
 
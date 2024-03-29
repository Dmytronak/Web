﻿using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.AccountViews
{
    public class LoginAccountView
    {
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

    }
}
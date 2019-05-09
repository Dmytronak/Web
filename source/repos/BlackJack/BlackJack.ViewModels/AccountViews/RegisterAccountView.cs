using System.ComponentModel.DataAnnotations;

namespace BlackJack.ViewModels.AccountViews
{
    public class RegisterAccountView
    {
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Year is required")]
        public int Year { get; set; }

        [Required(ErrorMessage = "Pasword is required")]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Passwords is not confirmed")]
        public string ConfirmPassword { get; set; }
    }
}

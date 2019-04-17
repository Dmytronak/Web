using System.Collections.Generic;

namespace BlackJack.ViewModels.AccountViews
{
    public class RegisterAccountGetUserView
    {
        public List<RegisterAccountGetWiew> UsersReg { get; set; }

        public RegisterAccountGetUserView()
        {
            UsersReg = new List<RegisterAccountGetWiew>();
        }
    }
    public class RegisterAccountGetWiew
    {
        public string Email { get; set; }
        public int Year { get; set; }
    }
   
}

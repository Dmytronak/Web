using System.Collections.Generic;

namespace BlackJack.ViewModels.AccountViews
{
    public class GetAllAccountView
    {
        public List<UserGetAllAccountViewItem> Users { get; set; }

        public GetAllAccountView()
        {
            Users = new List<UserGetAllAccountViewItem>();
        }
    }
    public class UserGetAllAccountViewItem
    {
        public string Email { get; set; }
        public int Year { get; set; }
    }
   
}

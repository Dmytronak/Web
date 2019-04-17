using System.Collections.Generic;

namespace BlackJack.ViewModels.AccountViews
{
    public class GetAllAccountsView
    {
        public List<GetAllAccountsViewItem> UsersReg { get; set; }

        public GetAllAccountsView()
        {
            UsersReg = new List<GetAllAccountsViewItem>();
        }
    }
    public class GetAllAccountsViewItem
    {
        public string Email { get; set; }
        public int Year { get; set; }
    }
   
}

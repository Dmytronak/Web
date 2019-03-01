using System;
using System.Collections.Generic;
using System.Text;

namespace Project.ViewModels.OrderViews
{
    public class BuyOrderView
    {
        
        public string User { get; set; }
        public string Address { get; set; }
        public string ContactPhone { get; set; }
        public List<Guid> Books { get; set; }

    }
}

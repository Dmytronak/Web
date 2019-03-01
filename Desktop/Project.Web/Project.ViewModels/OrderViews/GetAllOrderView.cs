using System;
using System.Collections.Generic;

namespace Project.ViewModels.OrderViews
{
    public class GetAllOrderView
    {
        public List<OrderGetAllOrderView> Orders { get; set; }

        public GetAllOrderView()
        {
            Orders = new List<OrderGetAllOrderView>();
        }
    }

    public class OrderGetAllOrderView
    {
        public Guid Id { get; set; }
        public string User { get; set; }
        public string Address { get; set; }
        public string ContactPhone { get; set; }

    }
}
 

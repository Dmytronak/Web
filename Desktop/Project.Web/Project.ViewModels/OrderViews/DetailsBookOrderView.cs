using System;
using System.Collections.Generic;

namespace Project.ViewModels.OrderViews
{
    public class DetailsBookOrderView
    {
        public Guid Id { get; set; }
        public string User { get; set; }
        public string Address { get; set; }
        public string ContactPhone { get; set; }
        public List<BookDetailsOrderViewItem> BooksDetails { get; set; }

        public DetailsBookOrderView()
        {
            BooksDetails = new List<BookDetailsOrderViewItem>();
        }

    }

    public class BookDetailsOrderViewItem
    {
        public Guid BookId { get; set; }
        public string Name { get; set; }
  
    }
}

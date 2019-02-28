using System;
using System.Collections.Generic;

namespace Project.ViewModels.BookViews
{
    public class GetAllBookView
    {
        public List<BookGetAllBookViewItem> Books { get; set; }

        public GetAllBookView()
        {
            Books = new List<BookGetAllBookViewItem>();
        }
    }

    public class BookGetAllBookViewItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
    }
}

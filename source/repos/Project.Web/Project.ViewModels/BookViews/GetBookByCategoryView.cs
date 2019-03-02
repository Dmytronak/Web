using System;
using System.Collections.Generic;
using System.Text;

namespace Project.ViewModels.BookViews
{
    public class GetBookByCategoryView
    {

        public List<BookGetByCategoryBookViewItem> Books { get; set; }

        public GetBookByCategoryView()
        {
            Books = new List<BookGetByCategoryBookViewItem>();
        }
    }

    public class BookGetByCategoryBookViewItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
        public string NameCat { get; set; }
    }

}


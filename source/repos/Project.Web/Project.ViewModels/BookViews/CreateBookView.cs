using System;

namespace Project.ViewModels.BookViews
{
    public class CreateBookView
    {
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
        public Guid CategoryId { get; set; }
    }
}

using System;

namespace Project.ViewModels.BookViews
{
    public class UpdateBookView
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
    }
}
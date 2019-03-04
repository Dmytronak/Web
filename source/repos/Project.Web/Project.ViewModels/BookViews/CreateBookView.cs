using System;
using System.ComponentModel.DataAnnotations;

namespace Project.ViewModels.BookViews
{
    public class CreateBookView
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }

        [Required]
        [StringLength(20)]
        public string Author { get; set; }
       
        [Required]
        [Range(20, 500)]
        public double Price { get; set; }

        [Required]
        public Guid CategoryId { get; set; }
    }
}

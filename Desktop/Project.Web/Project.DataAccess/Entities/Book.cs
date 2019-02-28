namespace Project.DataAccess.Entities
{
    public class Book : BaseEntity
    {
      
        public string Name { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
    }
}

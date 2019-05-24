using Microsoft.AspNetCore.Identity;

namespace BlackJack.DataAccess.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public int Year { get; set; }  
    }
}
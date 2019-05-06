using Microsoft.AspNetCore.Identity;

namespace BlackJack.DataAccess.Entities
{
    public class User : IdentityUser
    {
        public int Year { get; set; }  
    }
}
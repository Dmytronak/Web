using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace BlackJack.DataAccess.Entities
{
    public class User : IdentityUser
    {
        public static ClaimsIdentity Identity { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }  
    }
}
using Microsoft.AspNetCore.Identity;

namespace CustomIdentity.Models
{
    public class User : IdentityUser
    {
       
        public int Year { get; set; }
    }
}
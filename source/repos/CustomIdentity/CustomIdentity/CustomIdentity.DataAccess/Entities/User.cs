using Microsoft.AspNetCore.Identity;

namespace CustomIdentity.DataAccess.Entities
{
    public class User : IdentityUser
    {
       
        public int Year { get; set; }
        
    }
}
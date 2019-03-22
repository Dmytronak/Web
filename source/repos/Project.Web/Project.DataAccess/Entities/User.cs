using Microsoft.AspNetCore.Identity;

namespace Project.DataAccess.Entities
{

    public class User : IdentityUser
    {
        public int Year { get; set; }
        public bool RememberMe { get; set; }
    }
}
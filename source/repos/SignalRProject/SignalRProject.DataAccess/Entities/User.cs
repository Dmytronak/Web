using Microsoft.AspNetCore.Identity;

namespace SignalRProject.DataAccess.Entities
{
    public class User : IdentityUser
    {
        public string FirstName  { get; set; }
        public string LastName { get; set; }
        public string Photo { get; set; }
        public int Age { get; set; }
    }
}

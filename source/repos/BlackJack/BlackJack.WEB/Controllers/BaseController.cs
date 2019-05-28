using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BlackJack.WEB.Controllers
{
    public class BaseController : Controller
    {
        [Authorize]
        protected string UserId()
        {
            return HttpContext.User.Identity.Name;
        }
    }
}
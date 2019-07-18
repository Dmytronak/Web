using Microsoft.AspNetCore.Mvc;

namespace BlackJack.WEB.Controllers
{
    public class BaseController : Controller
    {
        public string UserId { get { return HttpContext?.User?.Identity?.Name ?? string.Empty; } }
    }
}
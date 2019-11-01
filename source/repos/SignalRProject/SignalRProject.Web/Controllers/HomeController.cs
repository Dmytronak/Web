using Microsoft.AspNetCore.Mvc;

namespace SignalRProject.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
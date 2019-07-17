using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BlackJack.WEB.Controllers
{
    public class BaseController : Controller
    {
        public string UserId { get {return HttpContext.User.Identity.IsAuthenticated ? HttpContext.User.Identity.Name : string.Empty;}}
    }
}
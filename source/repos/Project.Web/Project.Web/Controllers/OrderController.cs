using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project.BusinessLogic.Interfaces;
using Project.ViewModels.OrderViews;

namespace Project.Web.Controllers
{
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;

        }
        [HttpGet]
        public  IActionResult Buy()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Buy([FromBody]BuyOrderView model)
        {
            await _orderService.Buy(model);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public async Task<IActionResult> Details(Guid id)
        {

            var result = await _orderService.Details(id);
            return Ok(result);
        }
        // GET: /<controller>/
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var result = await _orderService.GetAll();
            return View(result);
        }
    }
}

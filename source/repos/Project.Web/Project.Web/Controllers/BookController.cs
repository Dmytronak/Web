using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project.BusinessLogic.Interfaces;
using Project.ViewModels.BookViews;
using Project.Web.Filters;

namespace Project.Web.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;

        }

        [HttpGet]
        public async Task<IActionResult> CategoryBooks([FromBody]Guid id)
        {
            var result = await _bookService.GetBookByCategory(id);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> Update(Guid id)
        {
            var model = await _bookService.GetById(id);
            return View(model);
           
        }

        [HttpPost]
        
        public async Task<IActionResult> Update(UpdateBookView model)
        {
            await _bookService.Update(model);
            return RedirectToAction("Index");
        }

        [HttpGet]
        //[ActionName("ConfirmDelete")]
        public async Task<IActionResult> ConfirmDelete(Guid id)
        {
            var model = await _bookService.GetById(id);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _bookService.Delete(id);
            return RedirectToAction("Index");

        }
    
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateBookView model)
        {

            if(!ModelState.IsValid)
            {
                return View(model);
            }

            await _bookService.Create(model);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var result = await _bookService.GetAll();
            return View(result);
        }

    }
}
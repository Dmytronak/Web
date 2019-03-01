using Project.BusinessLogic.Interfaces;
using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using Project.ViewModels.BookViews;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Project.BusinessLogic.Services
{
    public class BookService : IBookService
    {

        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task Create(CreateBookView model)
        {
            var book = new Book()
            {
                Name = model.Name,
                Author = model.Author,
                Price = model.Price
            };
            await _bookRepository.Create(book);

        }

        public async Task Update(UpdateBookView model)
        {
            var book = await _bookRepository.GetById(model.Id);

            if(book==null)
            {
                throw new ArgumentNullException("Book received a null argument!");
            }

            book.Name = model.Name;
            book.Price = model.Price;
            book.Author = model.Author;

            await _bookRepository.Update(book);

        }

        public async Task<GetAllBookView> GetAll()
        {
            var books = await _bookRepository.GetAll();

            var model = new GetAllBookView();
            model.Books = books.Select(x => new BookGetAllBookViewItem()
            {

                Id = x.Id,
                Name = x.Name,
                Author = x.Author,
                Price = x.Price

            }).ToList();

            return model;
        }



        public async Task<GetByIdBookView> GetById(Guid id)
        {
            var book = await _bookRepository.GetById(id);

            var model = new GetByIdBookView()
            {
                Id = book.Id,
                Author = book.Author,
                Name = book.Name,
                Price = book.Price
            };

            return model;
        }

        public async Task Delete(Guid id)
        {
            var book = await _bookRepository.GetById(id);

            if (book != null)
            {
                await _bookRepository.Delete(book);
            }
        }

       
    }
}

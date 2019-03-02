using Project.ViewModels.BookViews;
using System.Threading.Tasks;
using System;

namespace Project.BusinessLogic.Interfaces
{
    public interface IBookService
    {
        Task<GetAllBookView> GetAll();
        Task<GetByIdBookView> GetById(Guid id);
        Task Create(CreateBookView model);
        Task Delete(Guid id);
        Task Update(UpdateBookView model);
        Task<GetBookByCategoryView> GetBookByCategory(Guid id);
    }
}

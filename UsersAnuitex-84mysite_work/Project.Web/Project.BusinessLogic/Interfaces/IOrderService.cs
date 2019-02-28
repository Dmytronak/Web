using Project.ViewModels.OrderViews;
using System;
using System.Threading.Tasks;

namespace Project.BusinessLogic.Interfaces
{
    public interface IOrderService
    {
        Task<GetAllOrderView> GetAll();
        Task<GetByIdOrderView> GetById(Guid id);
       
        Task Buy(BuyOrderView model);
        
    }
}

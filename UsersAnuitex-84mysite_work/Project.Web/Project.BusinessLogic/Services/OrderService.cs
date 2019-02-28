using Project.BusinessLogic.Interfaces;
using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using Project.ViewModels.OrderViews;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Project.BusinessLogic.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IBookInOrderRepository _bookInOrderRepository;

        public OrderService(IOrderRepository orderRepository,IBookInOrderRepository bookInOrderRepository)
        {
            _orderRepository = orderRepository;
            _bookInOrderRepository = bookInOrderRepository;
        }
        public async Task Buy(BuyOrderView model)
        {
            if (model.User == null)
            {
                throw new ArgumentNullException("Model received a null argument!");
            }

            var order = new Order()
            {
                User = model.User,
                Address = model.Address,
                ContactPhone = model.ContactPhone

            };

            if (model.Books == null)
            {
                throw new ArgumentNullException("Book received a null argument!");
            }
            
            var booksInOrder = model.Books.Select(x => new BookInOrder()
            {
                BookId = x,
                OrderId = order.Id
            }).ToList();

            ////booksInOrder.ForEach(async (x) => await _bookInOrderRepository.Create(x));
            await _orderRepository.Create(order);
            await _bookInOrderRepository.AddList(booksInOrder);

        }
            //var bookInOrder = new List<BookInOrder>();
            //foreach (var bid in model.Books)
            //{


            //    bookInOrder.Add(new BookInOrder()
            //    {
            //        OrderId = order.Id,
            //        BookId = bid
            //    });

            //}

        public async Task<GetAllOrderView> GetAll()
        {
            var orders = await _orderRepository.GetAll();

            var model = new GetAllOrderView();
            model.Orders = orders.Select(x => new OrderGetAllOrderView()
            { 
                User = x.User,
                Address = x.Address,
                ContactPhone = x.ContactPhone,

            }).ToList();

            return model;
        }
        public async Task<GetByIdOrderView> GetById(Guid id)
        {
            var order = await _orderRepository.GetById(id);

            var model = new GetByIdOrderView()
            {
               
                User = order.User,
                Address = order.Address,
                ContactPhone = order.ContactPhone
            };

            return model;
        }
    }
}

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
        //private readonly IBookRepository _bookRepository;

        public OrderService(IOrderRepository orderRepository,IBookInOrderRepository bookInOrderRepository/*, IBookRepository bookRepository*/)
        {
            _orderRepository = orderRepository;
            _bookInOrderRepository = bookInOrderRepository;
            //_bookRepository = bookRepository;
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
            //var bookInOrder = new List<BookInOrder>();
            //foreach (var bid in model.Books)
            //{
            //    bookInOrder.Add(new BookInOrder()
            //    {
            //        OrderId = order.Id,
            //        BookId = bid
            //    });

            //}
            ////booksInOrder.ForEach(async (x) => await _bookInOrderRepository.Create(x));
            await _orderRepository.Create(order);
            await _bookInOrderRepository.AddList(booksInOrder);

        }

        public async Task<DetailsBookOrderView> Details(Guid id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("Your ID received a null argument!");
            }
          
            var booksInOrder = await _bookInOrderRepository.GetByOrderId(id);
            var order = await _orderRepository.GetById(id);
            //var bookall = await _bookRepository.GetAll();
          

            var model = new DetailsBookOrderView();
            model.Id = id;
            model.User = order.User;
            model.Address = order.Address;
            model.ContactPhone = order.ContactPhone;


            model.BooksDetails = booksInOrder.Select(x => new BookDetailsOrderViewItem()
            {
                BookId = x.Book.Id,
                Name = x.Book.Name
            }).ToList();

            //model.BooksDetails = bio.Where(o => o.OrderId == id)
            //    .Select(x => new BookDetailsOrderViewItem()
            //    {
            //        BookId = x.BookId,
            //        Name = bookall.Where(i => i.Id == x.BookId).FirstOrDefault().Name

            //    })

            //    .ToList();

            return model;
        }

      

        public async Task<GetAllOrderView> GetAll()
        {
            var orders = await _orderRepository.GetAll();

            var model = new GetAllOrderView();
            model.Orders = orders.Select(x => new OrderGetAllOrderView()
            { 
                Id = x.Id,
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

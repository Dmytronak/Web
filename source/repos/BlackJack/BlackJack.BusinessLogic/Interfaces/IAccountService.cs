using BlackJack.ViewModels.AccountViews;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<LoginAccountResponseView> Login(LoginAccountView model);
        Task<LoginAccountResponseView> Register(RegisterAccountView model);
        Task<GetAllAccountView> RegisterList();
    }
}

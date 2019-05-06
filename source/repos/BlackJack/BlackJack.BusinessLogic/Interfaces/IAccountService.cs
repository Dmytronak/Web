using BlackJack.ViewModels.AccountViews;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<AccountResponseView> Login(LoginAccountView model);
        Task<AccountResponseView> Register(RegisterAccountView model);
        Task<GetAllAccountView> RegisterList();
    }
}

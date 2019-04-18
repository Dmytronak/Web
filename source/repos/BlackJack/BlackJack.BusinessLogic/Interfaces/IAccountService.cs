using BlackJack.ViewModels.AccountViews;
using BlackJack.ViewModels.JwtProviderView;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<AccountResponseView> Login(LoginAccountView model);
        Task<AccountResponseView> Register(RegisterAccountView model);
        Task<GetAllAccountsView> RegisterList();
    }
}

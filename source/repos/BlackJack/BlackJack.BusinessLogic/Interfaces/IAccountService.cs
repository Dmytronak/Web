using BlackJack.ViewModels.AccountViews;
using BlackJack.ViewModels.JwtProviderView;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<JwtTokenView> Login(LoginAccountView model);
        Task<JwtTokenView> Register(RegisterAccountView model);
        Task<RegisterAccountGetUserView> RegisterList();
    }
}

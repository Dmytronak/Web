using CustomIdentity.ViewModels.AccountViews;
using CustomIdentity.ViewModels.JwtProviderView;
using System.Threading.Tasks;

namespace CustomIdentity.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<JwtTokenView> Login(LoginAccountView model);
        Task<JwtTokenView> Register(RegisterAccountView model);
    }
}

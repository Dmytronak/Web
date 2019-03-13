using CustomIdentity.ViewModels.AccountViews;
using System.Threading.Tasks;

namespace CustomIdentity.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<object> Login(LoginAccountView model);
        Task<object> Register(RegisterAccountView model);
    }
}

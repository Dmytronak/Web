using Project.ViewModels.IdentityViews;
using System.Threading.Tasks;

namespace Project.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task RegisterAccount(RegisterAccountViewModel model);
    }
}

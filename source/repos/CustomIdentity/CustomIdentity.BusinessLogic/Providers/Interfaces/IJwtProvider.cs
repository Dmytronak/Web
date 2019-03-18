using CustomIdentity.DataAccess.Entities;
using CustomIdentity.ViewModels.JwtProviderView;
using System.Threading.Tasks;

namespace CustomIdentity.BusinessLogic.Providers.Interfaces
{
    public interface IJwtProvider
    {
        Task<JwtTokenView> GenerateJwtToken(string email, User user);
    }
}

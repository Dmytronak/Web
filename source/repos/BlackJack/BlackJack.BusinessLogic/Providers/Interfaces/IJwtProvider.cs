using BlackJack.DataAccess.Entities;
using BlackJack.ViewModels.JwtProviderView;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Providers.Interfaces
{
    public interface IJwtProvider
    {
        Task<JwtTokenView> GenerateJwtToken(string email, User user);
    }
}

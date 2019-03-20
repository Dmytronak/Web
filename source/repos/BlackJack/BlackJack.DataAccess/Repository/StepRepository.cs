using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Interfaces;

namespace BlackJack.DataAccess.Repository
{
    public class StepRepository : BaseRepository<Step>, IStepRepository
    {
        public StepRepository(ApplicationContext context) : base(context)
        {

        }
    }
}

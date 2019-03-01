using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;

namespace Project.DataAccess.Repository
{
    class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(DataBaseContext context) : base(context)
        {

        }

    }
}

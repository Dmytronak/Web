using Project.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.DataAccess.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity> GetById(Guid id);
        Task Create(TEntity item);
        Task Update(TEntity item);
        Task Delete(TEntity item);
        Task AddList(IEnumerable<TEntity> item);
    }
}


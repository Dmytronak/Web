using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task<List<TEntity>> GetAll();
        Task<TEntity> GetById(Guid id);
        Task Create(TEntity item);
        Task Update(TEntity item);
        Task Delete(TEntity item);
        Task AddList(List<TEntity> item);
        Task RemoveList(List<TEntity> item);
    }
}
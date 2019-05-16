using BlackJack.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJack.DataAccess.Dapper.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task<List<TEntity>> GetAll();
        Task<TEntity> GetById(Guid id);
        Task Create(TEntity item);
        Task Update(TEntity item);
        Task Remove(TEntity item);
        Task CreateRange(List<TEntity> items);
        Task RemoveRange(List<TEntity> items);
    }
}

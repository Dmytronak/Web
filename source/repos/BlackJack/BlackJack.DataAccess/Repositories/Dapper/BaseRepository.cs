using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using System.Linq;
using System.Data;
using System.Data.SqlClient;

namespace BlackJack.DataAccess.Repositories.Dapper
{
    public abstract class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly IDbConnection _connection;
        protected BaseRepository(IDbConnection connection)
        {
            _connection = connection;
        }
        public async Task Create(TEntity item)
        {
            await _connection.InsertAsync(item);
        }
        public async Task CreateRange(List<TEntity> items)
        { 
            await _connection.InsertAsync(items);
        }
        public async Task<List<TEntity>> GetAll()
        {
            var result = (await _connection.GetAllAsync<TEntity>()).ToList();
            return result;
        }
        public async Task<TEntity> GetById(Guid id)
        {
            var result = await _connection.GetAsync<TEntity>(id);
            return result;
        }
        public async Task Remove(TEntity item)
        {
            await _connection.DeleteAsync(item);
        }
        public async Task RemoveRange(List<TEntity> items)
        {
             _connection.Delete(items);
        }
        public async Task Update(TEntity item)
        {
            await _connection.UpdateAsync(item);
        }
    }
}

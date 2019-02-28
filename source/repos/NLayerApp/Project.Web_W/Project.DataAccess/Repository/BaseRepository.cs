using Microsoft.EntityFrameworkCore;
using Project.DataAccess.Entities;
using Project.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Project.DataAccess.Repository
{
    public abstract class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        DataBaseContext _context;
        DbSet<TEntity> _dbSet;

        public BaseRepository(DataBaseContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }
        public async Task Create(TEntity item)
        {
           await _dbSet.AddAsync(item);
           await _context.SaveChangesAsync();

        }

        public async Task Delete(TEntity item)
        {
            _dbSet.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            var result = await _dbSet.AsNoTracking().ToListAsync();
            return result;
        }

        public async Task<TEntity> GetById(Guid id)
        {
            var result = await _dbSet.FirstOrDefaultAsync(x => x.Id == id);
            return result;
        }

        public async Task Update(TEntity item)
        {
           _context.Entry(item).State = EntityState.Modified;
           await _context.SaveChangesAsync();
        }
    }
}

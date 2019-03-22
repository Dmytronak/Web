using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Project.DataAccess.Entities;

namespace Project.DataAccess
{
   public class DataBaseContext : IdentityDbContext<User>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<BookInOrder> BoookInOrders { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }
    }
}

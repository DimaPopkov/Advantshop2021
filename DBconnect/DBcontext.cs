using DBconnect.Configurations;
using DBconnect.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBconnect;

public class MyDBcontext : DbContext
{
    public MyDBcontext(DbContextOptions<MyDBcontext> options) : 
        base(options)
    {}

    public DbSet<CategoriesEntity> Categories { get; set; }

    public DbSet<ProductEntity> Products { get; set; }

    public DbSet<PopularCategoriesEntity> PopularCategories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new CategoryiesConfig());
        modelBuilder.ApplyConfiguration(new ProductConfig());
        modelBuilder.ApplyConfiguration(new PopularCategories());

        base.OnModelCreating(modelBuilder);
    }
}
using DBconnect.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBconnect.Repositories;
public class CategoryRepos
{
    private readonly MyDBcontext _dbContext;
    public CategoryRepos(MyDBcontext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<CategoriesEntity>> Get()
    {
        return await _dbContext.Categories
            .AsNoTracking()
            .OrderBy(c => c.CategoryId)
            .ToListAsync();
    }

    public async Task<List<CategoriesEntity>> GetWithLessons()
    {
        return await _dbContext.Categories
            .AsNoTracking()
            .Include(c => c.Products)
            .ToListAsync();
    }

    public async Task<CategoriesEntity?> GetbyId(Guid id)
    {
        return await _dbContext.Categories
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.CategoryId == id);
    }

    public async Task Add(Guid CategoryId, string Category)
    {
        var CategoryEnt = new CategoriesEntity()
        {
            CategoryId = CategoryId,
            Category = Category
        };

        await _dbContext.AddAsync(CategoryEnt);
        await _dbContext.SaveChangesAsync();
    }

    public async Task Update(Guid categoryId, string Category)
    {
        await _dbContext.Categories
            .Where(c => c.CategoryId == categoryId)
            .ExecuteUpdateAsync(s => s
                .SetProperty(c => c.CategoryId, categoryId)
                .SetProperty(c => c.Category, Category)
            );
    }

    public async Task Delete(Guid categoryId, string CategoryName)
    {
        await _dbContext.Categories
            .Where(c => c.CategoryId == categoryId)
            .ExecuteDeleteAsync();
    }
}

public class ProductRepos
{
    private readonly MyDBcontext _dbContext;

    public ProductRepos(MyDBcontext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddProduct(Guid catId, ProductEntity product)
    { 
        var category = await _dbContext.Categories.FirstOrDefaultAsync(c => c.CategoryId == catId)
            ?? throw new Exception();

        category?.Products.Add(product);
    }
}
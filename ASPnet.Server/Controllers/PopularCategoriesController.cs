using DBconnect;
using DBconnect.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;


[ApiController]
[Route("[controller]")]
public class PopularCategoriesController : ControllerBase
{
    private readonly MyDBcontext _context;

    public PopularCategoriesController(MyDBcontext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetCategory()
    {
        var PopularCategory = _context.PopularCategories.ToList();
        return Ok(PopularCategory);
    }

    [HttpPost]
    public IActionResult CreateCategory([FromBody] PopularCategoriesEntity PopularCategory)
    {
        var newPopularCategory = new PopularCategoriesEntity
        {
            Img = PopularCategory.Img,
            Category = PopularCategory.Category
        };

        _context.PopularCategories.Add(newPopularCategory);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetCategory), new { id = newPopularCategory.CategoryId }, newPopularCategory);
    }

    [HttpDelete("{id}")] 
    public async Task<IActionResult> DeleteCategory(Guid id)
    {
        var PopularCategory = await _context.PopularCategories.FindAsync(id);
        if (PopularCategory == null)
        {
            return NotFound();
        }

        _context.PopularCategories.Remove(PopularCategory);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

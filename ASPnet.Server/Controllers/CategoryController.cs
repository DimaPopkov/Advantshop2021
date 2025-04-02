using DBconnect;
using DBconnect.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;


[ApiController]
[Route("[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly MyDBcontext _context;

    public CategoriesController(MyDBcontext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetCategory()
    {
        var category = _context.Categories.ToList();
        return Ok(category);
    }

    [HttpPost]
    public IActionResult CreateCategory([FromBody] CategoriesEntity category)
    {
        var newCategory = new CategoriesEntity
        {
            Category = category.Category
        };

        _context.Categories.Add(newCategory);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetCategory), new { id = newCategory.CategoryId }, newCategory);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory(Guid id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound();
        }

        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

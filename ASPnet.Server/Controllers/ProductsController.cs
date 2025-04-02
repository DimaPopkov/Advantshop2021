using DBconnect;
using DBconnect.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;


[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly MyDBcontext _context;

    public ProductsController(MyDBcontext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetProduct()
    {
        var products = _context.Products.ToList();
        return Ok(products);
    }

    [HttpPost] 
    public IActionResult CreateProduct([FromBody] ProductEntity product)
    {
        var newProduct = new ProductEntity
        {
            Img = product.Img,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            Category = product.Category,
            Rating = product.Rating,
            Quantity = product.Quantity
        };

        _context.Products.Add(newProduct);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetProduct), new { id = newProduct.ProductId }, newProduct);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(Guid id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DBconnect.Models;

public class ProductEntity
{
    public Guid ProductId { get; set; }
    public string Img { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public decimal Rating { get; set; }
    public decimal Quantity { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Category { get; set; } = string.Empty;
}
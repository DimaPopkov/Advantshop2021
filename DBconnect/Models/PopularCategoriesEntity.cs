using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBconnect.Models;

public class PopularCategoriesEntity
{
    public Guid CategoryId { get; set; }
    public string Img { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public List<ProductEntity> Products { get; set; } = [];
}
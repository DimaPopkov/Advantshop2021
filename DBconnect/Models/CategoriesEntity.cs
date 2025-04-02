using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DBconnect.Models;

public class CategoriesEntity
{
    public Guid CategoryId { get; set; }

    public string Category { get; set; } = string.Empty;

    public List<ProductEntity> Products { get; set; } = [];
}
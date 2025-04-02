using DBconnect.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBconnect.Configurations;

public class CategoryiesConfig : IEntityTypeConfiguration<CategoriesEntity>
{
    public void Configure(EntityTypeBuilder<CategoriesEntity> builder)
    {
        builder.HasKey(a => a.CategoryId);
    }
}

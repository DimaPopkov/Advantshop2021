using DBconnect.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBconnect.Configurations;
public class PopularCategories : IEntityTypeConfiguration<PopularCategoriesEntity>
{
    public void Configure(EntityTypeBuilder<PopularCategoriesEntity> builder)
    {
        builder.HasKey(a => a.CategoryId);
    }
}
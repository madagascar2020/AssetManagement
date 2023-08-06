using Domain.Aggregates.Asset;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Database.Context
{
    public class AssetManagementContext : DbContext
    {
        public DbSet<Asset> Assets { get; set; }

        public AssetManagementContext(DbContextOptions<AssetManagementContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asset>().Property(d => d.purchaseDate).HasColumnType("datetime2");

            base.OnModelCreating(modelBuilder);
        }
    }
}

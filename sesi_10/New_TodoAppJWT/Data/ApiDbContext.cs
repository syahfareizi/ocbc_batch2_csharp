using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using New_TodoApp.Models;

namespace New_TodoApp.Data
{
    public class ApiDbContext : IdentityDbContext
    {
        public virtual DbSet<ItemData> Items { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }
    }
}
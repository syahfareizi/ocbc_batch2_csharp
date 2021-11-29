using Microsoft.EntityFrameworkCore;
using NewMovieAPI.Models;

namespace NewMovieAPI.Data
{
    public class ApiDbContext : DbContext
    {
        public DbSet<MovieItem> Movies { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }
    }
}
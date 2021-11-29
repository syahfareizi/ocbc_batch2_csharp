using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore ;
using TodoAppWithJWT.Models;


namespace TodoAppWithJWT.Data
{
    public class ApiDbContext : IdentityDbContext
    {
        public virtual DbSet<ItemData> Items {get;set;}
        public virtual DbSet<RefreshToken> RefreshToken{get;set;}
        public ApiDbContext(DbContextOptions<ApiDbContext>options) : base(options)
        {

        }

    }
    
}
using Microsoft.EntityFrameworkCore;

namespace mission10.Models
{
    public class BowlerContext : DbContext
    {

        public BowlerContext(DbContextOptions<BowlerContext> options) : base(options) { }

        public DbSet<Bowler> Bowlers { get; set; }

        public DbSet<Team> Teams { get; set; }


    }
}

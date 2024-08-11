using Library_System.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks.Dataflow;

namespace Library_System.Data
{
    public class LibraryContext : DbContext

    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite("name=ConnectionStrings:localDb");
        }

        public DbSet<LibraryBook> Books { get; set; }
        public DbSet<User> Users { get; set; }
    }
}

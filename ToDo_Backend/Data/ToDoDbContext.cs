using Microsoft.EntityFrameworkCore;
using ToDo_Backend.Models;
namespace ToDo_Backend.Data
{
    public class ToDoDbContext:DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options) { }

        public DbSet<ToDo> ToDos { get; set; }
    }
}


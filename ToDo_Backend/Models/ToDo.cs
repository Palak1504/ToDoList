using System.ComponentModel.DataAnnotations;

namespace ToDo_Backend.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime? CompletedDate { get; set; }
        public TimeSpan? TimeTaken { get; set; }
    }
}

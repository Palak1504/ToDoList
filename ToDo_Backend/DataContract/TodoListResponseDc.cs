namespace ToDo_Backend.DataContract
{
    public class TodoListResponseDc
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime? CompletedDate { get; set; }
        public TimeSpan? TimeTaken { get; set; }
        public int TotalRecords { get; set; }
    }
    public class TodoListRequestDc
    {
        public string Keyword { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
    }
}

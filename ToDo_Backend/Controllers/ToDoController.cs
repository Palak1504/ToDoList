using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using System.Linq;
using ToDo_Backend.Data;
using ToDo_Backend.DataContract;
using ToDo_Backend.Models;
namespace ToDo_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly ToDoDbContext _Context;
        public ToDoController(ToDoDbContext context)
        {
            _Context = context;
        }
        //[HttpGet]
        //public async Task<IActionResult> GetAllCustomers()
        //{
        //    var todos = await _Context.ToDos.ToListAsync();
        //    return Ok(todos);
        //}
        [HttpPost]
        [Route("GetTodoList")]
        public async Task<List<TodoListResponseDc>> GetAllTodos(TodoListRequestDc request)
        {
            List<TodoListResponseDc> todoListResponseDcs = new List<TodoListResponseDc>();
            var todos = _Context.ToDos.Where(x => string.IsNullOrEmpty(request.Keyword) || x.Description.Contains(request.Keyword));
            int totalRecords = todos.Count();
            if (totalRecords > 0)
            {
                todoListResponseDcs = todos.Select(x => new TodoListResponseDc
                {
                    CompletedDate = x.CompletedDate,
                    CreatedDate = x.CreatedDate,
                    Description = x.Description,
                    Id = x.Id,
                    IsCompleted = x.IsCompleted,
                    TimeTaken = x.TimeTaken,
                    TotalRecords = totalRecords
                }).Skip(request.Skip).Take(request.Take).ToList();
            }
            return todoListResponseDcs;
        }
        [HttpPost]
        public async Task<IActionResult> AddTodo(ToDo todos)
        {
            todos.CreatedDate = DateTime.Now;
            todos.CompletedDate = null;
            todos.TimeTaken = null;
            _Context.ToDos.Add(todos);
            await _Context.SaveChangesAsync();
            return Ok(todos);
        }
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateToDo(ToDo todoUpdateRequest)
        {
            var todo = await _Context.ToDos.FirstOrDefaultAsync(x => x.Id == todoUpdateRequest.Id);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsCompleted = todoUpdateRequest.IsCompleted;
            todo.Description = todoUpdateRequest.Description;
            todo.CompletedDate = todo.IsCompleted ? DateTime.Now : null;
            todo.TimeTaken = todo.IsCompleted ? todo.CompletedDate - todo.CreatedDate : null;
            _Context.Entry(todo).State = EntityState.Modified;
            await _Context.SaveChangesAsync();
            return Ok(todo);
        }
        [HttpGet]
        [Route("delete")]
        public async Task<IActionResult> DeleteToDo(int todoId)
        {
            var todo = await _Context.ToDos.FirstOrDefaultAsync(x => x.Id == todoId);
            if (todo == null)
            {
                return NotFound();
            }
            _Context.ToDos.Remove(todo);
            await _Context.SaveChangesAsync();
            return Ok(todo);
        }
    }
}

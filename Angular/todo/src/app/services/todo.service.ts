import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
   baseApiUrl :string = "https://localhost:7158";
   constructor(private http: HttpClient) { }

  getAllTodos(todoFilter:any):Observable<Todos[]>
  {
    return this.http.post<Todos[]>(this.baseApiUrl+'/api/todo/GetTodoList',todoFilter)
  }
  addTodo(newtodo:Todos):Observable<Todos>{
    newtodo.id='0';
    return this.http.post<Todos>(this.baseApiUrl+'/api/todo',newtodo)
  }
  updateTodo(todo:Todos):Observable<Todos>{
    return this.http.post<Todos>(this.baseApiUrl+'/api/todo/update',todo)
  }
  deleteTodo(todoId:any):Observable<Todos>{
    return this.http.get<Todos>(this.baseApiUrl+'/api/todo/delete?todoId='+todoId)
  }
}


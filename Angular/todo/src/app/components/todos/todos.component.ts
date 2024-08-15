import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']

})
export class TodosComponent implements OnInit {

  isButton: boolean = false;
  todos: Todos[] = [];
  isPopup: any = false;
  confirmDialog: any = false;
  toast: any = false;
  Keyword: any = '';
  todoFilter: any = {}
  newtodo: Todos = {
    id: '',
    description: '',
    isCompleted: false,
    createdDate: new Date(),
    completedDate: undefined
  };
  constructor(private todoService: TodoService, private _confirmationService: ConfirmationService, private _messageService: MessageService) { }
  ngOnInit(): void {
    this.getAllTodos(null);
  }
  getAllTodos(event: any) {
    debugger
    let key = ''
    if (event && event.key == 'Backspace')
      key = this.Keyword;
    else
      key = event && event.key ? this.Keyword + event.key : '';
    this.todoFilter = {
      'keyword': key,
      'skip': 0,
      'take': 100
    }
    this.todoService.getAllTodos(this.todoFilter).subscribe({
      next: (todos: any) => {
        this.todos = todos;
        this.todos.forEach(x => x.isEdit = false);
      }
    })
  }

  popup() {
    this.isPopup = !this.isPopup;
  }
  addToDo() {
    console.log(this.newtodo, "this.newtodo");

    this.todoService.addTodo(this.newtodo).subscribe({
      next: (todo) => {
        this.popup()
        this.newtodo.description = '';
        this.getAllTodos(null);
      }
    })
  }
  onCompleted(todo: Todos) {
    debugger;
    // todo.isCompleted =!todo.isCompleted; 
    this.todoService.updateTodo(todo).subscribe({
      next: (response) => {
        this.getAllTodos(null);
      }
    })
  }
  onDelete(todoId: any) {

    this.todoService.deleteTodo(todoId).subscribe({
      next: (response) => {
        this.getAllTodos(null);
      }
    })
  }
  onSave(todo: any) {
    todo.isEdit = !todo.isEdit;
    if (!todo.isEdit) {
      this.confirmDialog = !this.confirmDialog
      this._confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => this.acceptFunc(todo),
        reject: () => this.rejectFunc()
      });

    }
  }

  showSuccess() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated', life: 1000 });
  }
  acceptFunc(todo: any) {
    this.todoService.updateTodo(todo).subscribe({
      next: (response) => {
        this.showSuccess();
        this.getAllTodos(null);
        this.toast = true;
        this.confirmDialog = !this.confirmDialog
      }
    })
  }
  rejectFunc() {
    this.confirmDialog = !this.confirmDialog
    this.getAllTodos(null);
  }
}

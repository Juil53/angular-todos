import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  faX = faX;
  title = 'angular15-todo';
  todos: Todo[] = [];
  todosNotCompleted: Todo[] = [];
  newTodo!: Todo;
  isLoading: boolean = false;
  status: string = '';

  @ViewChild(TodoDetailComponent) childComp: any;

  constructor(private todoService: TodosService) {
    this.isLoading = true;
    this.status = 'Loading...';
  }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.todoService.readAllTodo().subscribe((data) => {
      this.isLoading = false;
      this.todos = data;
    });
  }

  createTodo(todo: HTMLInputElement) {
    this.status = 'Creating new Task';
    this.isLoading = true;
    this.newTodo = {
      id: '',
      todo: todo.value,
      isCompleted: false,
      createdAt: new Date(),
    };
    this.todoService.createTodo(this.newTodo).subscribe((res) => {
      this.status = '';
      this.isLoading = false;
      this.todos = [...this.todos, res];
      this.todosNotCompleted = this.todos;
    });

    //clear Input field
    todo.value = '';
  }

  // updateTodo(todo: Todo) {
  //   //for UI performance
  //   const todoIndex = this.todos.findIndex((task) => task.todo === todo.todo);
  //   const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
  //   this.todos.splice(todoIndex, 1, updatedTodo);

  //   //update Data
  //   if (todoIndex != -1) {
  //     this.todoService.updateTodo(updatedTodo).subscribe((res) => {
  //       this.todosNotCompleted = this.todos.filter((todo) => !todo.isCompleted);
  //     });
  //   }
  // }

  // deleteTodo(todo: Todo) {
  //   this.status = 'Deleting';
  //   this.isLoading = true;
  //   const todoSelected = this.todos.find((task) => task.todo === todo.todo);
  //   this.todos = this.todos.filter((task) => task !== todoSelected);

  //   if (todoSelected) {
  //     this.todoService.deleteTodo(todoSelected).subscribe((res) => {
  //       this.status = '';
  //       this.isLoading = false;
  //     });
  //   } else {
  //     this.todos;
  //   }
  // }
}

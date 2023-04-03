import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { faX, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { filter, forkJoin } from 'rxjs';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  //icons
  faX = faX;
  faCircleInfo = faCircleInfo;

  todo!: Todo;
  todosNotCompleted: Todo[] = [];  
  isSelected: string = 'all';

  @Input() todos: Todo[] = [];
  @Input() keyword!: string;
  @Input() clearAll: () => void;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todosNotCompleted = this.todos.filter((todo) => !todo.isCompleted);
  }

  updateTodo(todo: Todo) {
    const todoIndex = this.todos.findIndex((task) => task.todo === todo.todo);
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    this.todos.splice(todoIndex, 1, updatedTodo);

    if (todoIndex != -1) {
      this.todoService.updateTodo(updatedTodo).subscribe((res) => {
        this.todosNotCompleted = this.todos.filter((todo) => !todo.isCompleted);
      });
    }
  }

  deleteTodo(todo: Todo) {
    const todoSelected = this.todos.find((task) => task.todo === todo.todo);
    this.todos = this.todos.filter((task) => task !== todoSelected);

    if (todoSelected) {
      this.todoService.deleteTodo(todoSelected).subscribe((res) => {
        console.log(res);
      });
    }
  }

  selectFilter(option: string) {
    switch (option) {
      case 'all':
        return (
          this.todos,
          this.isSelected = 'all'
        );
      case 'todo':
        return (
          this.todos.filter((todo) => !todo.isCompleted),
          this.isSelected = 'todo'
        );
      case 'completed':
        return (
          this.todos.filter((todo) => todo.isCompleted),
          this.isSelected = 'completed'
        );
      default:
        return this.todos;
    }
  }
}

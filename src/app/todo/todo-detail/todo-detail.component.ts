import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { faX, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
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
  filterTodos: Todo[] = [];
  isLoading: boolean = false;
  status: string = '';
  isSelected: string = 'all';

  @Input() todos: Todo[] = [];
  @Input() keyword!: string;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todosNotCompleted = this.todos.filter((todo) => !todo.isCompleted);
    this.filterTodos = this.todos;
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
    this.status = 'Deleting';
    this.isLoading = true;
    const todoSelected = this.todos.find((task) => task.todo === todo.todo);
    this.todos = this.todos.filter((task) => task !== todoSelected);

    if (todoSelected) {
      this.todoService.deleteTodo(todoSelected).subscribe((res) => {
        this.status = '';
        this.isLoading = false;
      });
    } else {
      this.todos;
    }
  }

  clearAllCompleted() {
    this.isLoading = true;
    this.status = 'Deleting...';
    //for UI performance
    const completedTasks = this.todos.filter((todo) => todo.isCompleted);
    this.todos = this.todos.filter((todo) => !completedTasks.includes(todo));

    //loop and send delete request
    completedTasks.map((task) => {
      this.todoService.deleteTodo(task).subscribe((res) => {
        // console.log(res)
      });
    });

    this.isLoading = false;
    this.status = '';
  }

  selectFilter(option: string) {
    console.log(option);
    switch (option) {
      case 'all':
        return (this.filterTodos = this.todos), (this.isSelected = 'all');
      case 'todo':
        return (
          (this.filterTodos = this.todos.filter((todo) => !todo.isCompleted)),
          (this.isSelected = 'todo')
        );
      case 'completed':
        return (
          (this.filterTodos = this.todos.filter((todo) => todo.isCompleted)),
          (this.isSelected = 'completed')
        );
      default:
        return this.filterTodos;
    }
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/todo.model";
import { TodosService } from "src/app/services/todos.service";
import { faX, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { forkJoin } from "rxjs";
@Component({
  selector: "app-todo-detail",
  templateUrl: "./todo-detail.component.html",
  styleUrls: ["./todo-detail.component.scss"],
})
export class TodoDetailComponent implements OnInit {
  //icons
  faX = faX;
  faCircleInfo = faCircleInfo;
  isLoading: boolean = false;
  todo!: Todo;
  todos: Todo[] = [];
  todosNotCompleted: Todo[] = [];
  filteredTodos: Todo[] = [];
  isSelected: string = "all";

  @Input() keyword!: string;
  @Input() clearAll: () => void;

  constructor(private todoService: TodosService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.todoService.readAllTodo().subscribe((data) => {
      this.todos = data;
      this.filteredTodos = this.todos;
      this.isLoading = false;
      this.todosNotCompleted = this.todos.filter((todo) => !todo.isCompleted);
    });
  }

  updateTodo(selectedTodo: Todo) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === selectedTodo.id);
    const updatedTodo = { ...selectedTodo, isCompleted: !selectedTodo.isCompleted };
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
      this.todoService.deleteTodo(todoSelected).subscribe((res) => {});
    }
  }

  clearAllCompleted() {
    this.isLoading = true;
    const completedTodos = this.todos.filter((todo) => todo.isCompleted);

    forkJoin(
      completedTodos.map((todo) => this.todoService.deleteTodo(todo))
    ).subscribe({
      next: (value) =>
        (this.filteredTodos = this.todos.filter((todo) => todo.isCompleted == false)),
      complete: () => {
        this.isLoading = false
      },
    });
  }

  selectFilter(option: string) {
    switch (option) {
      case "all":
        return (this.filteredTodos = this.todos), (this.isSelected = "all");
      case "todo":
        return (
          (this.filteredTodos = this.todos.filter((todo) => !todo.isCompleted)),
          (this.isSelected = "todo")
        );
      case "completed":
        return (
          (this.filteredTodos = this.todos.filter((todo) => todo.isCompleted)),
          (this.isSelected = "completed")
        );
      default:
        return this.todos;
    }
  }
}

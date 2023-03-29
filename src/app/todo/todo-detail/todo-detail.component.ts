import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  id!: string;
  todo!: Todo

  constructor(
    private router: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => (this.id = params['id']));
    this.todosService.readTodo(this.id).subscribe((todo) => {
      this.todo = todo
    });
  }
}

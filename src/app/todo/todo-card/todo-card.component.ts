import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  todo!: Todo;
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}

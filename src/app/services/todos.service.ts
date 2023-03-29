import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  TodosApiEndpoint = 'https://641c0e3b9b82ded29d5eeb3c.mockapi.io/api/v1/todos';

  constructor(private http: HttpClient) {}

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.TodosApiEndpoint, todo);
  }

  readAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.TodosApiEndpoint);
  }

  readTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.TodosApiEndpoint}/${id}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.TodosApiEndpoint}/${todo.id}`, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.TodosApiEndpoint}/${todo.id}`);
  }
}

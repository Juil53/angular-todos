import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], keyword: string) {
    if (todos.length === 0 || keyword === '') {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.todo.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }
}

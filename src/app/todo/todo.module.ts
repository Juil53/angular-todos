import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [TodoComponent, TodoDetailComponent],
  exports: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule, FontAwesomeModule],
})
export class TodoModule {}

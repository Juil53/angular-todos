import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [TodoComponent, TodoDetailComponent, TodoCardComponent],
  //Need to Export Component, so other module can use it (this app, use in app-routing-module)
  exports: [TodoComponent, TodoDetailComponent],
  imports: [CommonModule, TodoRoutingModule, FontAwesomeModule],
})
export class TodoModule {}

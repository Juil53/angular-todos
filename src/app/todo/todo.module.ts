import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TodoComponent
  ],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class TodoModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { TodoGuard } from './guard/todo.guard';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: ':id', component: TodoDetailComponent, canActivate: [AuthGuard, TodoGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

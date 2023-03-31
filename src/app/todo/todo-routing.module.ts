import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { RoleGuard } from './guard/role.guard';

import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard]},
  { path: 'todo/:id', component: TodoDetailComponent, canActivate: [AuthGuard, RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

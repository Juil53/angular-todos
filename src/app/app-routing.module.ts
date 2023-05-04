import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  //Redirect
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //404
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

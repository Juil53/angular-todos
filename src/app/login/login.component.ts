import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string
  password!: string

  login() {
    if(this.email == 'nghia@example.com' && this.password == 'password') {
      alert('Login OK!')
    }
    alert('Wrong email or password!')
  }
}

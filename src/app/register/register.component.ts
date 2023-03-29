import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
  };

  register(userForm: NgForm) {
    console.log(userForm.value)
    userForm.resetForm();
  }
}

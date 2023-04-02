import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
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

  form: any;
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'

  constructor () {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  //for template access variable email
  get email () {
    return this.form.get('email')
  }
  get password () {
    return this.form.get('password')
  }

  onSubmit() {
    console.log(this.form.value)
  }










  register(userForm: NgForm) {
    console.log(userForm.value)
    userForm.resetForm();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogging: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email == 'nghia@example.com' && password == 'password') {
      this.isLogging = true;
      this.isAdmin = true;
    }
    if (email == 'user@example.com' && password == 'password') {
      this.isLogging = true;
      this.isAdmin = false;
    }

    return this.isLogging
  }
}

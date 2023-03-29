import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  auth = {
    isLogging: false,
    isAdmin: false,
  }
  // isLogging: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email == 'nghia@example.com' && password == '12345') {
      this.auth.isLogging = true;
      this.auth.isAdmin = true;
    }

    if(email == 'user@example.com' && password == '12345') {
      this.auth.isLogging = true;
      this.auth.isAdmin = false;
    }

    return this.auth
  }
}

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
      localStorage.setItem('auth', JSON.stringify(this.auth))
    }

    if(email == 'user@example.com' && password == '12345') {
      this.auth.isLogging = true;
      this.auth.isAdmin = false;
      localStorage.setItem('auth', JSON.stringify(this.auth))
    }

    return this.auth
  }

  logout() {
    localStorage.removeItem('auth')
    this.auth.isLogging = false;
    this.auth.isAdmin = false;
  }
}

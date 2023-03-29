import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogging: boolean = false;

  constructor() { }

  login(email:string, password: string) {
    if(email == 'nghia@example.com' && password == 'password') {
      this.isLogging = true;
    }
    return this.isLogging;
  }
}

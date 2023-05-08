import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

interface LoginInterface {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginRequest: LoginInterface = {
    email: "",
    password: "",
  };

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    if (
      this.loginService.login(
        this.loginRequest.email,
        this.loginRequest.password
      )
    ) {
      this.router.navigate(["/todo"]);
    }
  }
}

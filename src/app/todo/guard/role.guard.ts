import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  json_auth: any;
  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.json_auth = localStorage.getItem('auth');
    if (this.json_auth) {
      if (JSON.parse(this.json_auth).isAdmin) {
        return JSON.parse(this.json_auth).isAdmin;
      } else {
        alert('Admin Only');
      }
    }
    return false;
  }
}

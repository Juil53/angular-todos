import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
})
export class AppNavigationComponent implements OnInit {
  isLogging!: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('auth')) {
      this.isLogging = true;
    } else {
      this.isLogging = false;
    }
  }

  logout() {
    alert('Logged Out');
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

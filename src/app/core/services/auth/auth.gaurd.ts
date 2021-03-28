import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    /**
     *  if the user is not logged in then
     *  return false and navigate to the Login page
     */
    // if (!this.authService.isLoggedIn()) {
    //   this.router.navigateByUrl('login');
    //   return false;
    // }
    return true;
  }
}

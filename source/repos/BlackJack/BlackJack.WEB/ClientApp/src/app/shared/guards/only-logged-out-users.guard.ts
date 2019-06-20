import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OnlyLoggedOut implements CanActivate {
  constructor(private authService: AuthService,private router: Router) {}

  canActivate() {

    if(this.authService.isLoggedIn())
    {
       this.router.navigate(['/game/home']);
       return false;

    }
    return true;
  }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class OnlyLoggedIn implements CanActivate {
  constructor(private authService: AuthService,private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;
      })
    );
  }
  
}
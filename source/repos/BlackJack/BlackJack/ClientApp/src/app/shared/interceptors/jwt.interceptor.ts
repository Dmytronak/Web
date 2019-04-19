import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    token: string = '';
    
    constructor(private userService: UserService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if availabled
        debugger
        if (this.userService.isLoggedIn()) {
            this.token = localStorage.getItem('auth_token');
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.token}`
                }
            });
        }

        return next.handle(request);
    }
}
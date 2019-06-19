import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    token: string = '';
    constructor(private userService: UserService, private localStorageService: LocalStorageService ) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.userService.isLoggedIn()) {
            this.token = this.localStorageService.getItem('auth_token');
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${this.token}`
                }
            });
        }
        return next.handle(request);
    }
}
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.userService.logout();
                location.reload(true);
            }   
            if (err.status === 400) {
               console.clear();
               debugger
               const error = err.error || err.statusText;
               return throwError(error);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
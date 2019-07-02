import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrMessagesService } from '../services/toastr-messages.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly authService: AuthService, private readonly router: Router, private readonly toastr:ToastrMessagesService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error || err.statusText;
            if (err.status === 401) {
                this.authService.logout();
                this.router.navigate(['']);
                this.toastr.warning(error); 
            }   
            if (err.status === 400) {
               this.toastr.info(error);  
               return throwError(error);
            }
            this.toastr.error(error); 
            return throwError(error);
        }))
    }
}
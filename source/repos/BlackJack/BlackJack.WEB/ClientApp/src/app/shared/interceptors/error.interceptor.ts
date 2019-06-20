import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrMessagesService } from '../services/toastr-messages.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly userService: UserService, private readonly router: Router, private readonly toastr:ToastrMessagesService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error || err.statusText;
            if (err.status === 401) {
                this.userService.logout();
                this.router.navigate(['']);
                this.toastr.warning(error,err.status); 
            }   
            if (err.status === 400) {
               console.clear();
               this.toastr.info(error,err.statusText);  
               return throwError(error);
            }
            this.toastr.error(error,err.status); 
            return throwError(error);
        }))
    }
}
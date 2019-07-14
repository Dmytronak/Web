import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly authService: AuthService, private readonly router: Router, private readonly toastr:ToastrMessagesService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const errorMessage = err.error || err.statusText;
            if (err.status === 401) {
                this.authService.logout();
                this.router.navigate(['']);
                this.toastr.warning(errorMessage); 
            }   
            if (err.status === 400) {
               this.toastr.info(errorMessage);  
               return throwError(errorMessage);
            }
            this.toastr.error(errorMessage); 
            return throwError(errorMessage);
        }))
    }
}
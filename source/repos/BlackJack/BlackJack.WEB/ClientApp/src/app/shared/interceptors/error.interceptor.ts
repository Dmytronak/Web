import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly userService: UserService, private readonly router: Router, private readonly toastr:ToastrService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.userService.logout();
                this.router.navigate(['']);
                this.toastr.error(err.error); 
            }   
            if (err.status === 400) {
               console.clear();
               const error = err.error || err.statusText;
               this.toastr.info(err.error); 
               return throwError(error);
            }
            const error = err.error || err.statusText;
            this.toastr.error(err.error); 
            return throwError(error);
        }))
    }
}
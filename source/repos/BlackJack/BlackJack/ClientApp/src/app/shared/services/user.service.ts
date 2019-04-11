import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { ConfigService } from '../utils/config.service';

import { Router, ActivatedRoute } from '@angular/router';
import '..//..//../../node_modules/rxjs/operators';
import { Credentials } from 'crypto';
import { error } from 'util';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';
  errorS: string ='';
 
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  
  }

  register(email: string, password: string, passwordConfirm: string, year: number) {
    debugger
    var body = ({ email, password, passwordConfirm, year });
    return this.http
      .post(this.baseUrl + "/accounts/register", body).subscribe(
        result => {
          if (result) {
            this.router.navigate(['/login'], { queryParams: { brandNew: true, email: email } });
          }
        },
        errors => console.error(errors));
  }

  login(email, password, rememberMe) {

    var body = ({ email, password, rememberMe });
    return this.http
      .post<Credentials>(this.baseUrl + "/accounts/login", body)
      .subscribe(response => {

        let token = (<any>response).token;
        localStorage.setItem("auth_token", token);
        this._authNavStatusSource.next(true);
        this.loggedIn = true;
        this.router.navigate(["/game/home"]);
        localStorage.setItem("log_email", email);
      }, error => {
        this.loggedIn = false;
      
        console.log(error.error);
        debugger
      }
      );
     
  
    }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('log_email');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    
    return this.loggedIn;

  }
}


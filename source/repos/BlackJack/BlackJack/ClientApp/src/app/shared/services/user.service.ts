import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { ConfigService } from '../utils/config.service';

import { Router, ActivatedRoute } from '@angular/router';


@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  loggedIn = false;

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
    return this.http.post(this.baseUrl + "/accounts/register", body);
  }

  login(email, password, rememberMe) {
    var body = ({ email, password, rememberMe });
    return this.http.post(this.baseUrl + "/accounts/login", body);
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


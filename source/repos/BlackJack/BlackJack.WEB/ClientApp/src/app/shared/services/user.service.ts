import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from '../configs/url.config';

import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../entities/user.view';

@Injectable()

export class UserService  {

  baseUrl: string = '';
  public usersReg: User[] = [];
  // Observable navItem source
  _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

  register(user: User) {

    return this.http.post(this.baseUrl + "/account/register", user);
  }
  registerUsers() {
 
    return this.http.get<User[]>(this.baseUrl + "/account/register");
  }

  login(user: User) {

    return this.http.post(this.baseUrl + "/account/login", user);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}


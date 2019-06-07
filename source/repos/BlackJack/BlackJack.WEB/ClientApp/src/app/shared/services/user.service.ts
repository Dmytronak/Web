import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
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

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = environment.baseUrl;
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


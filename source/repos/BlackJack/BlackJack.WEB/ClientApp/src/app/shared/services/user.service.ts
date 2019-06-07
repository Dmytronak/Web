import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { RegisterAccountView } from '../entities/auth/register-account.view';
import { UserGetAllAccountViewItem } from '../entities/auth/get-all-account.view';
import { LoginAccountView } from '../entities/auth/login-account.view';

@Injectable()

export class UserService  {

  baseUrl: string = '';
  // Observable navItem source
  _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  loggedIn = false;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.loggedIn = !!this.localStorageService.getItem('auth_token');
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = environment.baseUrl;
  }

  register(registerAccount: RegisterAccountView) {
    return this.http.post(this.baseUrl + "/account/register", registerAccount);
  }
  registerUsers() {
    return this.http.get<UserGetAllAccountViewItem[]>(this.baseUrl + "/account/register");
  }

  login(loginAccount: LoginAccountView) {
    return this.http.post(this.baseUrl + "/account/login", loginAccount);
  }
  logout() {
    this.localStorageService.removeItem('auth_token');
    this.localStorageService.removeItem('email');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}


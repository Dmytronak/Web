import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { RegisterAccountView } from '../entities/auth/register-account.view';
import { UserGetAllAccountViewItem } from '../entities/auth/get-all-account.view';
import { LoginAccountView } from '../entities/auth/login-account.view';
import { LoginAccountResponseView } from '../entities/auth/login-account-response.view';
import { Router } from '@angular/router';

@Injectable()

export class UserService  {

  baseUrl: string = '';
  authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this.authNavStatusSource.asObservable();
  loggedIn = false;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService,private readonly router: Router) {
    this.loggedIn = !!this.localStorageService.getItem('auth_token');
    this.authNavStatusSource.next(this.loggedIn);
    this.baseUrl = environment.baseUrl;
  }

  register(registerAccount: RegisterAccountView) {
    return this.http.post(this.baseUrl + "/account/register", registerAccount);
  }
  registerUsers() {
    return this.http.get<UserGetAllAccountViewItem[]>(this.baseUrl + "/account/register");
  }

  login(loginAccount: LoginAccountView) {
    let response = this.http.post(this.baseUrl + "/account/login", loginAccount)
    .subscribe((x:LoginAccountResponseView) => {
      if (x) {
        this.localStorageService.setItem("auth_token", x.token);
        this.localStorageService.setItem("email", loginAccount.email);
        this.loggedIn = true;
        this.authNavStatusSource.next(true);
        this.router.navigate(["/game/home"]);
      }
    });
    return response;
  }
  logout() {
    this.localStorageService.removeItem('auth_token');
    this.localStorageService.removeItem('email');
    this.loggedIn = false;
    this.authNavStatusSource.next(false);
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}


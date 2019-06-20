import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { RegisterAccountView } from '../entities/auth/register-account.view';
import { GetAllAccountView } from '../entities/auth/get-all-account.view';
import { LoginAccountView } from '../entities/auth/login-account.view';
import { LoginAccountResponseView } from '../entities/auth/login-account-response.view';
import { map, filter } from 'rxjs/operators';

@Injectable()

export class AuthService {
  private readonly baseUrl: string = '';
  private readonly authNavStatusSource = new BehaviorSubject<boolean>(false);
  private loggedIn = false;
  authNavStatus = this.authNavStatusSource.asObservable();

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    this.loggedIn = !!this.localStorageService.getItem('auth_token');
    this.authNavStatusSource.next(this.loggedIn);
    this.baseUrl = environment.baseUrl;
  }

  public register(registerAccount: RegisterAccountView): Observable<LoginAccountResponseView> {
    return this.http.post<LoginAccountResponseView>(`${this.baseUrl}/account/register`, registerAccount);
  }
  public getAll(): Observable<GetAllAccountView> {
    return this.http.get<GetAllAccountView>(`${this.baseUrl}/account/getall`);
  }
  public login(loginAccount: LoginAccountView): Observable<LoginAccountResponseView> {
    return this.http.post<LoginAccountResponseView>(`${this.baseUrl}/account/login`, loginAccount)
      .pipe(filter((response: LoginAccountResponseView)=>response.token !==''),
      map((response: LoginAccountResponseView) => {
        this.completeAuthentication(response.token, loginAccount.email);
      return response;
    })); 
  }
  public logout(): void {
    this.localStorageService.removeItem('auth_token');
    this.localStorageService.removeItem('email');
    this.loggedIn = false;
    this.authNavStatusSource.next(false);
  }
  private completeAuthentication(token: string, email: string): void {
    this.localStorageService.setItem("auth_token", token);
    this.localStorageService.setItem("email", email);
    this.loggedIn = true;
    this.authNavStatusSource.next(true);
  }
  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { RegisterAccountView } from 'src/app/shared/entities/auth/register-account.view';
import { GetAllAccountView } from 'src/app/shared/entities/auth/get-all-account.view';
import { LoginAccountView } from 'src/app/shared/entities/auth/login-account.view';
import { LoginAccountResponseView } from 'src/app/shared/entities/auth/login-account-response.view';
import { filter, tap } from 'rxjs/operators';

@Injectable()

export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) {
    this.loggedIn.next(!!this.localStorageService.getItem('auth_token'));
  }

  public register(registerAccount: RegisterAccountView): Observable<LoginAccountResponseView> {
    return this.http.post<LoginAccountResponseView>(`${environment.baseUrl}/account/register`, registerAccount);
  }
  public getAll(): Observable<GetAllAccountView> {
    return this.http.get<GetAllAccountView>(`${environment.baseUrl}/account/getall`);
  }
  public login(loginAccount: LoginAccountView): Observable<LoginAccountResponseView> {
    return this.http.post<LoginAccountResponseView>(`${environment.baseUrl}/account/login`, loginAccount)
      .pipe(filter((response: LoginAccountResponseView)=>!!response.token),
      tap((response: LoginAccountResponseView) => {
        this.completeAuthentication(response.token, loginAccount.email);
      return response;
    })); 
  }
  public logout(): void {
    this.localStorageService.removeItem('auth_token');
    this.localStorageService.removeItem('email');
    this.loggedIn.next(false);
  }
  private completeAuthentication(token: string, email: string): void {
    this.localStorageService.setItem("auth_token", token);
    this.localStorageService.setItem("email", email);
    this.loggedIn.next(true);
  }
  public getEmail(): string {
    return this.localStorageService.getItem('email');
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}


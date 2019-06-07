import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoginAccountResponseView } from 'src/app/shared/entities/auth/login-account-response.view';
import { LoginAccountView } from 'src/app/shared/entities/auth/login-account.view';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class LoginAuthComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private subscription: Subscription;
  brandNew: boolean;
  error: string;
  submitted: boolean = false;
  credentials: LoginAccountView = { email: '', password: ''};
  loginAccountResponse:LoginAccountResponseView = { token :''};
  loginAccount: LoginAccountView;

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router,
    private activatedRoute: ActivatedRoute, _formBuilder: FormBuilder) {
    debugger
    this.userService.loggedIn = !!this.localStorageService.getItem('auth_token');
    this.formGroup = _formBuilder.group({
      'email': ['', Validators.email],
      'password': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    });

  }

  ngOnInit() {
    this.userService._authNavStatusSource.next(this.userService.loggedIn);
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        this.credentials.email = param['email'];
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  get f() {
    return this.formGroup.controls;
  }


  login(): LoginAccountView {
    this.loginAccount = Object.assign(this.credentials, this.formGroup.value);
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }
    this.userService.login(this.loginAccount)
      .subscribe(x => {
        debugger
        this.loginAccountResponse.token = x['token'];
        this.localStorageService.setItem("auth_token", this.loginAccountResponse.token);
        this.localStorageService.setItem("email", this.loginAccount.email);
        this.userService._authNavStatusSource.next(true);
        this.userService.loggedIn = true;
        this.router.navigate(["/game/home"]);

      },
        err => {

          this.userService.loggedIn = false;
          this.error = err.error;

        }
      )
  }
}



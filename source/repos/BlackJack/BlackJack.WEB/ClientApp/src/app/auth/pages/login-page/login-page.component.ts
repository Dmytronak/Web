import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { LoginAccountView } from 'src/app/shared/entities/auth/login-account.view';
import { LoginAccountResponseView } from 'src/app/shared/entities/auth/login-account-response.view';
import { passwordValidation } from 'src/app/shared/validators/password.validator';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginAuthComponent extends BaseComponent {
  private loginForm: FormGroup;
  constructor(private readonly userService: UserService, private readonly formBuilder: FormBuilder, private readonly router: Router) {
    super();
    this.initForms();
  }
  ngOnInit() {
  }
  private initForms(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6), passwordValidation]],
    });
  }
  private login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginAccount: LoginAccountView = Object.assign({
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    });

    this.userService.login(loginAccount)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((response: LoginAccountResponseView) => {
        this.router.navigate(["/game/home"]);
      });
  }
}
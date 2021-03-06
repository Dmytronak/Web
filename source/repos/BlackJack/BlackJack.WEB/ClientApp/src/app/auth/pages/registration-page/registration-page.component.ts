import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { mustMatch } from 'src/app/shared/validators/must-match.validator';
import { yearRange } from 'src/app/shared/validators/year-range.validator';
import { GetAllAccountView, UserGetAllAccountViewItem } from 'src/app/shared/entities/auth/get-all-account.view';
import { RegisterAccountView } from 'src/app/shared/entities/auth/register-account.view';
import { takeUntil } from 'rxjs/operators';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';
import { LoginAccountResponseView } from 'src/app/shared/entities/auth/login-account-response.view';
import { passwordValidation } from 'src/app/shared/validators/password.validator';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationAuthComponent extends BaseComponent {
  private registerForm: FormGroup;
  private accoutsModel: GetAllAccountView;
  constructor(private readonly authService: AuthService, private readonly router: Router, private readonly formBuilder: FormBuilder,
    private readonly toastrService: ToastrMessagesService) {
    super();
    this.initForms();
  }
  ngOnInit() {
    this.initPage();
  }
  private initPage(): void{
    this.authService.getAll()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe((response: GetAllAccountView) => {
      this.accoutsModel = response;
    });
  }
  private initForms(): void {
    this.registerForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'name': ['', [Validators.required, Validators.maxLength(15)]],
      'year': ['', [Validators.required, Validators.minLength(4), yearRange, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'password': ['', [Validators.required, Validators.minLength(6), passwordValidation]],
      'confirmPassword': ['', [Validators.required, Validators.minLength(6), passwordValidation]],
    }, {
        validator: mustMatch('password', 'confirmPassword')
      });
  }

  private register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const registerAccount: RegisterAccountView = {
      ...this.registerForm.value
    };
    const isExistUser: boolean = !!this.accoutsModel.users
      .find((user: UserGetAllAccountViewItem) => user.email === registerAccount.email);
    if (isExistUser) {
      let errorMessage = { message: `Username ${registerAccount.email} is already taken` };
      this.toastrService.warning(errorMessage.message);
      return;
    }
      this.authService.register(registerAccount)
        .pipe(takeUntil(this.componetDestroyed))
        .subscribe((response: LoginAccountResponseView) => {
          this.toastrService.success(`Email ${registerAccount.email} is successfully register.`);
          this.router.navigate(['/auth/login']);
        });
    }
}


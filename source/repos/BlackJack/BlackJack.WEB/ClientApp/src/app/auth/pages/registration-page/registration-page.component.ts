import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/helpers/must-match.helper';
import { YearRange } from 'src/app/shared/helpers/year-range.helper';
import { UserGetAllAccountViewItem } from 'src/app/shared/entities/auth/get-all-account.view';
import { RegisterAccountView } from 'src/app/shared/entities/auth/register-account.view';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class RegistrationAuthComponent implements OnInit {

  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  public registerForm: RegisterAccountView;
  formGroup: FormGroup;
  public userGetAllAccounts: UserGetAllAccountViewItem[];
  public registerAccount: RegisterAccountView;

  constructor(private userService: UserService, private router: Router, private _formBuilder: FormBuilder,private readonly toastr: ToastrService) {
    this.formGroup = _formBuilder.group({
      'email': ['', Validators.email],
      'name': ['', Validators.maxLength(15)],
      'year': ['', [Validators.minLength(4),YearRange, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'password': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
      'confirmPassword': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  ngOnInit() {
    this.registerForm =
      {
        email: '',
        name:'',
        year: 0,
        password: '',
        confirmPassword: '',
      }
    this.userService.registerUsers().subscribe(x => {
      this.userGetAllAccounts = x['users'];
    }, error => error);

  }

  registration() {
    this.submitted = true;
    this.isRequesting = true;
    this.registerAccount = Object.assign(this.registerForm, this.formGroup.value)
    let newUser = this.registerAccount.email;
    let duplicateUser = this.userGetAllAccounts.filter(x => { return x.email === newUser; }).length;
    if (this.formGroup.invalid) {
      return;
    }
    if (duplicateUser) {
      let errorMessage = { message: 'Username "' + newUser + '" is already taken' };
      return this.toastr.error( errorMessage.message);
    }
    this.userService.register(this.registerAccount)
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/auth/login'], { queryParams: { brandNew: true, email: this.registerAccount.email } });
        }
      },
        err => {
          this.error = err.error;
        }

      )
  }
}


import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/entities/user.view';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MustMatch } from 'src/app/shared/helpers/must-match.helper';
import { throwError } from 'rxjs';
import { YearRange } from 'src/app/shared/helpers/year-range.helper';

@Component({
  selector: 'app-registration-auth',
  templateUrl: './registration-auth.component.html',
  styleUrls: ['./registration-auth.component.scss']
})
export class RegistrationAuthComponent implements OnInit {

  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  public registerForm: User;
  formGroup: FormGroup;
  public users: User[] = [];
  public user: User;

  constructor(private userService: UserService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) {
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
        token: '',
      }
    this.userService.registerUsers().subscribe((user: User[]) => {
      this.users = user['users'];
    }, error => error);

  }

  registration() {
    this.submitted = true;
    this.isRequesting = true;
    this.user = Object.assign(this.registerForm, this.formGroup.value)
    let newUser = this.user.email;
    let duplicateUser = this.users.filter(x => { return x.email === newUser; }).length;
    if (this.formGroup.invalid) {
      return;
    }
    if (duplicateUser) {
      let errorMessage = { status: 422, message: 'Username "' + newUser + '" is already taken' }
      throwError(new Error(errorMessage.message));
      this.error = errorMessage.message;
      return this.alertService.error(errorMessage.message);
    }
    this.userService.register(this.user)
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/auth/login'], { queryParams: { brandNew: true, email: this.user.email } });
        }
      },
        err => {
          this.error = err.error;
        }

      )
  }
}


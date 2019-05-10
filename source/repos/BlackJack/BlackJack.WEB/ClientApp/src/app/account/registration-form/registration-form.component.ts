import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/entities/user.view';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/helpers/must-match.helper';
import { throwError } from 'rxjs';
import { AlertService } from '../../shared/services/alert.service';
import { YearRange } from '../../shared/helpers/year-range.helper';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

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
      console.log(this.users)
    }, error => error);

  }

  registration() {
    this.submitted = true;
    this.isRequesting = true;
    this.user = Object.assign(this.registerForm, this.formGroup.value)
    let newUser = this.user.email;
    debugger
    let duplicateUser = this.users.filter(x => { return x.email === newUser; }).length;
    debugger
    if (this.formGroup.invalid) {
      return;
    }
    if (duplicateUser) {
      debugger
      let errorMessage = { status: 422, message: 'Username "' + newUser + '" is already taken' }
      throwError(new Error(errorMessage.message));
      this.error = errorMessage.message;
      return this.alertService.error(errorMessage.message);
    }
    this.userService.register(this.user)
      .subscribe(x => {
        debugger
        if (x) {
          this.router.navigate(['/login'], { queryParams: { brandNew: true, email: this.user.email } });
        }
      },
        err => {
          debugger

          this.error = err;
        }

      )
  }
}


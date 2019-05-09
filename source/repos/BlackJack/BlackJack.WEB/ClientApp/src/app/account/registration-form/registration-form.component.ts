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
  public register: User;
  formGroup: FormGroup;
  public usersReg: User[] = [];
  public reg: User;

  constructor(private userService: UserService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) {
    this.formGroup = _formBuilder.group({
      'email': ['', Validators.email],
      'name': ['', Validators.maxLength(20)],
      'year': ['', [Validators.minLength(4),YearRange, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'password': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
      'confirmPassword': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  ngOnInit() {
    this.register =
      {
        email: '',
        name:'',
        year: 0,
        password: '',
        confirmPassword: '',
        token: '',
      }
    this.userService.registerUsers().subscribe((user: User[]) => {
      this.usersReg = user['users'];
      console.log(this.usersReg)
    }, error => error);

  }

  registerUser() {
    this.submitted = true;
    this.isRequesting = true;
    this.reg = Object.assign(this.register, this.formGroup.value)
    let newUser = this.reg.email;
    debugger
    let duplicateUser = this.usersReg.filter(x => { return x.email === newUser; }).length;
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
    this.userService.register(this.reg)
      .subscribe(x => {
        debugger
        if (x) {
          this.router.navigate(['/login'], { queryParams: { brandNew: true, email: this.reg.email } });
        }
      },
        err => {
          debugger

          this.error = err;
        }

      )
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../shared/models/user.registration.interface';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/utils/must-match.validator';
import { UsersReg } from '../../shared/models/user.list.interface';
import { throwError } from 'rxjs';





@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  public register: UserRegistration;
  formGroup: FormGroup;
  public usersReg: UsersReg[] = [];
  public reg: UserRegistration;

  constructor(private userService: UserService, private router: Router, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'email': ['', Validators.email],
      'year': ['', [Validators.minLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'password': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
      'passwordConfirm': ['', [Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    }, {
        validator: MustMatch('password', 'passwordConfirm')
      });
  }

  ngOnInit() {
    this.register =
      {
        email: '',
        year: 0,
        password: '',
        passwordConfirm: ''

      }
    this.userService.registerUsers().subscribe((res: UsersReg[]) => {
      this.usersReg = res['usersReg'];
      console.log(this.usersReg)
    }, error => this.userService.handleError(error));

  }
  registerUser() {
    debugger
    this.submitted = true;
    this.isRequesting = true;
    this.reg = Object.assign(this.register, this.formGroup.value)
    let newUser = this.reg.email;
    let duplicateUser = this.usersReg.filter(x => { return x.email === newUser; }).length;

    if (this.formGroup.invalid) {
      return;
    }
    if (duplicateUser) {
      let errorMessage = { status:422, message: 'Username "' + newUser + '" is already taken' }
      throwError(new Error(errorMessage.message));
      return this.error = this.userService.handleError(errorMessage);
      }
    this.userService.register(this.reg)
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/login'], { queryParams: { brandNew: true, email: this.reg.email } });
        }
      },
        err => {
          debugger
         
          this.error = this.userService.handleError(err);
        }
        
      )
  }

}


import { Subscription, observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../shared/models/credentials.interface';
import { UserService } from '../../shared/services/user.service';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private subscription: Subscription;
  brandNew: boolean;
  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '', rememberMe: false };
  loginCred: Credentials;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, ) {
    this.userService.loggedIn = !!localStorage.getItem('auth_token');
    this.formGroup = _formBuilder.group({
      'email': ['', Validators.email],
      'password': ['', [Validators.minLength(6),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
      'rememberMe': '',
    });
    
  }

  ngOnInit() {
    this.userService._authNavStatusSource.next(this.userService.loggedIn);
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        this.credentials.email = param['email'];
        this.credentials.rememberMe = param['rememberMe'];
      });
  
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
  get f() {
    return this.formGroup.controls;
  }


  login() {
    debugger
    this.loginCred = Object.assign(this.credentials, this.formGroup.value);
    this.submitted = true;
    this.isRequesting = true;

    if (this.formGroup.invalid) {
      return;
    }
    this.userService.login(this.loginCred)
      .subscribe(x => {
        let token = (<any>x).token;
        localStorage.setItem("auth_token", token);
        this.userService._authNavStatusSource.next(true);
        this.userService.loggedIn = true;
        this.router.navigate(["/game/home"]);
        debugger
      },
        err => {
          debugger
          this.userService.loggedIn = false;
          this.error = err.error.error;
          this.userService.handleError(err);
        }
      )
  }
}


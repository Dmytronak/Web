import { Subscription, observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../shared/models/credentials.interface';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  brandNew: boolean;
  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '', rememberMe: false };

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userService.loggedIn = !!localStorage.getItem('auth_token');
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

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;

    if (valid) {
      this.userService.login(value.email, value.password, value.rememberMe)
        .subscribe(x => {
          let token = (<any>x).token;
          localStorage.setItem("auth_token", token);
          this.userService._authNavStatusSource.next(true);
          this.userService.loggedIn = true;
          this.router.navigate(["/game/home"]);
          localStorage.setItem("log_email", value.email);
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
}

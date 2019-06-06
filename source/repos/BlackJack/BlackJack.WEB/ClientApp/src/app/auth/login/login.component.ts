import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/entities/user.view';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginAuthComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private subscription: Subscription;
  brandNew: boolean;
  error: string;
  submitted: boolean = false;
  credentials: User = { email: '', name: '', password: '', confirmPassword: '', year: 0, token: '' };
  user: User;

  constructor(private userService: UserService, private router: Router,
    private activatedRoute: ActivatedRoute, _formBuilder: FormBuilder) {
    this.userService.loggedIn = !!localStorage.getItem('auth_token');
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


  login(): User {

    this.user = Object.assign(this.credentials, this.formGroup.value);
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }
    this.userService.login(this.user)
      .subscribe(x => {
        debugger
        this.user.token = x['token'];
        localStorage.setItem("auth_token", this.user.token);
        localStorage.setItem("email", this.user.email);
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



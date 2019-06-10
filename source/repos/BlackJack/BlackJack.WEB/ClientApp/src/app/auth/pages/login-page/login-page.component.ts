import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class LoginAuthComponent implements OnInit, OnDestroy {
  private loginForm: FormGroup;
  private subscription: Subscription;
  private brandNew: boolean;

  constructor(private readonly userService: UserService,
    private readonly activatedRoute: ActivatedRoute, private readonly formBuilder: FormBuilder, private readonly toastr: ToastrService) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        if (this.brandNew) {
          this.toastr.success('All set! Please login with your account')
        }
      });
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    });
  }
  private getControl(name:string): AbstractControl {
    return this.loginForm.get(name);
  }
  private getErrors(name:string): boolean {
    return this.getControl(name).invalid && (this.getControl(name).dirty || this.getControl(name).touched);
  }
  private login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(this.loginForm.value);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
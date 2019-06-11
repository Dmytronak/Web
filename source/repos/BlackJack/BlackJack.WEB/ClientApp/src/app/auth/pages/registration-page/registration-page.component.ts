import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/helpers/must-match.helper';
import { YearRange } from 'src/app/shared/helpers/year-range.helper';
import { UserGetAllAccountViewItem, GetAllAccountView } from 'src/app/shared/entities/auth/get-all-account.view';
import { RegisterAccountView } from 'src/app/shared/entities/auth/register-account.view';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class RegistrationAuthComponent implements OnInit {
  private registerForm: FormGroup;
  private getAllAccounts: GetAllAccountView;
  private componetDestroyed: Subject<boolean> = new Subject<boolean>();
  
  constructor(private readonly userService: UserService, private readonly router: Router, private readonly formBuilder: FormBuilder,
    private readonly toastrService: ToastrService) {
  }
  ngOnInit() {
    this.initForms();
    this.userService.registerUsers()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe(x => {
      debugger
      this.getAllAccounts = x;
    });
  }
  private initForms(): void{
    this.registerForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email]],
      'name': ['', [Validators.required,Validators.maxLength(15)]],
      'year': ['', [Validators.required,Validators.minLength(4),YearRange, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'password': ['', [Validators.required,Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
      'confirmPassword': ['', [Validators.required,Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  private hasErrors(name:string): boolean {
    return this.registerForm.get(name).invalid && (this.registerForm.get(name).dirty || this.registerForm.get(name).touched);
  }
  private registration() {
    let registerAccount: RegisterAccountView = {
      email:this.registerForm.value['email'],
      name:this.registerForm.value['name'],
      year:this.registerForm.value['year'],
      password:this.registerForm.value['password'],
      confirmPassword:this.registerForm.value['confirmPassword'],
    };
    let duplicateUser = this.getAllAccounts.users
    .filter(x => { 
      return x.email === registerAccount.email; 
    })
    .length;
    if (duplicateUser) {
      let errorMessage = { message: 'Username "' + registerAccount.email + '" is already taken' };
      return this.toastrService.warning(errorMessage.message);
    }
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.register(registerAccount)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
        if (x) {
          this.toastrService.success('Email '+registerAccount.email +' is successfully register.','All set!');
          this.router.navigate(['/auth/login']);
        }
      })
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}


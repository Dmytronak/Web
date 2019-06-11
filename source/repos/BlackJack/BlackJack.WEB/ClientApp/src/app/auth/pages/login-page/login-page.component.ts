import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { takeUntil,timeInterval} from 'rxjs/operators';
import { LoginAccountView } from 'src/app/shared/entities/auth/login-account.view';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class LoginAuthComponent implements OnInit, OnDestroy {
  private loginForm: FormGroup;
  private componetDestroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly userService: UserService, private readonly formBuilder: FormBuilder,private readonly router: Router) {
  }
  ngOnInit(){
    this.initForms();
  }
  private initForms():void{
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]],
    });
  }
  private hasErrors(name:string): boolean {
    return this.loginForm.get(name).invalid && (this.loginForm.get(name).dirty || this.loginForm.get(name).touched);
  }
  private login(): void {
    let loginAccount: LoginAccountView = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value 
    };
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(loginAccount)
     .pipe(takeUntil(this.componetDestroyed))
     .subscribe(x=> {
      if (x) {
        this.router.navigate(["/game/home"]);
      }
    });
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}
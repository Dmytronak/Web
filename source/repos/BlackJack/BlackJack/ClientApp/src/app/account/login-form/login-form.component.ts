import { Subscription, observable } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../shared/models/credentials.interface';
import { UserService } from '../../shared/services/user.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors:string;
 
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '', rememberMe: false };

  constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute ) { }

    ngOnInit() {

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

   
    debugger
    if (valid) {
      this.userService.login(value.email, value.password,value.rememberMe)
      this.errors ='sadsadsad' ;
      debugger
    }
  }
}

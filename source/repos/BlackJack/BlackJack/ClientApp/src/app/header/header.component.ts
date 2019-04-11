import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit,OnDestroy {
 
  status: boolean;
  subscription:Subscription;
  email:string  = '';

  constructor(private userService:UserService) {   
   
   }

   logout() {
     this.userService.logout();       
  }

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
    this.email = localStorage.getItem('log_email');
  }

   ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}

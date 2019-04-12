import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header-email',
  templateUrl: './header-email.component.html',
  styleUrls: ['./header-email.component.css']
})

export class HeaderEmailComponent implements OnInit,OnDestroy {
 
  status: boolean;
  subscription:Subscription;
  email:string  = '';

  constructor(private userService:UserService) {   
   
   }

   logout() {
     this.userService.logout();       
  }

  ngOnInit() {
    this.email = localStorage.getItem('log_email');
  }

   ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}

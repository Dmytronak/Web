import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header-email',
  templateUrl: './header-email.component.html',
  styleUrls: ['./header-email.component.css']
})

export class HeaderEmailComponent implements OnInit, OnDestroy {

  status: boolean;
  subscription: Subscription;
  email: string = '';
  token: string = '';
  constructor(private userService: UserService) {

  }
  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    debugger
    this.token = localStorage.getItem('auth_token');
    this.email = this.parseJwt(this.token)['sub'];
  }

  parseJwt(token) {
    debugger
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let res = JSON.parse(window.atob(base64));
    return res;
  };
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}

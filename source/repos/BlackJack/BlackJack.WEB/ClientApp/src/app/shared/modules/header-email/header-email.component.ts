import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header-email',
  templateUrl: './header-email.component.html',
  styleUrls: ['./header-email.component.css']
})

export class HeaderEmailComponent implements OnInit {

  status: boolean;
  subscription: Subscription;
  email: string = '';
 
  constructor(private userService: UserService) {

  }
  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth-header-shared',
  templateUrl: './auth-header-shared.component.html',
  styleUrls: ['./auth-header-shared.component.scss']
})
export class AuthHeaderSharedComponent implements OnInit {

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
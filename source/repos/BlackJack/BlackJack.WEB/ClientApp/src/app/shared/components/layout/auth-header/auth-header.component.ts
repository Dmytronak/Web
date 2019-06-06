import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
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
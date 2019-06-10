import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  email: string = '';
 
  constructor(private userService: UserService,private localStorageService: LocalStorageService) {

  }
  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    this.email = this.localStorageService.getItem('email');
  }
}
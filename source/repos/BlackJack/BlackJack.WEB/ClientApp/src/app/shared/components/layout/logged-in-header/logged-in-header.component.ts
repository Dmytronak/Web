import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})
export class LoggedInHeaderComponent implements OnInit {
  email: string = '';
 
  constructor(private authService: AuthService,private localStorageService: LocalStorageService) {

  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.email = this.localStorageService.getItem('email');
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})
export class LoggedInHeaderComponent implements OnInit {
  public email: string = '';
  public navbarCollapsed = false;
  constructor(private authService: AuthService,private localStorageService: LocalStorageService) {
  }
  public logout(): void {
    this.authService.logout();
  }
  ngOnInit() {
    this.email = this.authService.getEmail();
  }
}
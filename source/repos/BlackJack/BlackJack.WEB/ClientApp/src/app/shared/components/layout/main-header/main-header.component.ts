import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  private isLogged: Observable<boolean>;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
  }
}

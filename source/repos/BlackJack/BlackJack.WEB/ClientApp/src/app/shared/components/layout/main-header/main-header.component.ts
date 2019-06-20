import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  status: boolean;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.authNavStatus.subscribe(status => this.status = status);
  }
}

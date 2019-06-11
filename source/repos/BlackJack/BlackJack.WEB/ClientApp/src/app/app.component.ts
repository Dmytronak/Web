import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'BlackJackClient';
  status: boolean;
  constructor(private userService:UserService) {   
   
   }
   
  ngOnInit() {
     this.userService.authNavStatus.subscribe(status => this.status = status);
  }
}

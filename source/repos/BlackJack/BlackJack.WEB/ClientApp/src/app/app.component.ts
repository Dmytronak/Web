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
  snapshot: string;
  status: boolean;
  subscription:Subscription;
  
  constructor(private userService:UserService) {   
   
   }
   
  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './shared/services/user.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

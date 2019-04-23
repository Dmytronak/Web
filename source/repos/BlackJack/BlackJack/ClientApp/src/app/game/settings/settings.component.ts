import { Component, OnInit } from '@angular/core';
import { Subscription, observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/entities/player.view';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private subscription: Subscription;
  brandNew: boolean;
  credentials: Player = { email: '', name: '',id:''};

  constructor( private activatedRoute: ActivatedRoute,) {  
   
}
  ngOnInit() {
     this.subscription = this.activatedRoute.queryParams.subscribe(
    (param: any) => {
      this.brandNew = param['brandNew'];
      this.credentials.email = param['email'];
      this.credentials.name = param['name'];
      this.credentials.id = param['id'];
    });
  }

}

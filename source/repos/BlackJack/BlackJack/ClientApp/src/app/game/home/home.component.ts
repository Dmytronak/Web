import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GameService } from '../../shared/services/game.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { Player } from '../../shared/entities/player.view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailS:string='';
  public playersDb: Player[]=[];
  public playerReq:Player;
  constructor(private gameService: GameService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) { 
    debugger
    this.emailS = localStorage.getItem('email'); 
    this.playerReq = {email:this.emailS,name:''};
  }
 
  
  ngOnInit() {
    debugger
    this.gameService.getPlayers(this.playerReq).subscribe(x => {
      this.playersDb = x['players'];
      console.log(this.playersDb)
    }, error => error);

  }
}

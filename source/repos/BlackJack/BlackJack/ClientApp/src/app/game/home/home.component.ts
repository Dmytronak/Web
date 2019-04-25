import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  isRequesting: boolean;
  emailS: string = '';
  error: string = '';
  showForm: boolean;
  brandNew: boolean;
  public players: Player[];
  public playersDb: Player[];
  public playerReq: Player;


  constructor(private gameService: GameService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) {
    debugger
    this.emailS = localStorage.getItem('email');
    this.playerReq = { email: this.emailS, name: '', id: '' };
  }

  ngOnInit() {
    debugger
    this.gameService.getExistingPlayers(this.playerReq).subscribe(x => {
      this.players = x['players'];
    }, error => error);
    this.gameService.getExistingPlayers(this.playerReq).subscribe(x => {
      this.playersDb = x['players'];
    }, error => error);
  }
  addNewPlayer(name: string) {
    debugger
    const addPlayer = Object.assign({}, this.playerReq, { name: name });
    this.players.push(addPlayer)
    this.brandNew = true;
  }
  showInput() {
    this.showForm = true;
  }
  closeInput() {
    this.showForm = false;
    this.brandNew = false;
  }
  playGame(newPlayer: Player) {
    debugger
    this.isRequesting = true;
    let newUser = newPlayer['player'].name;
    let duplicatePlayer = this.playersDb.filter(x => { return x['name'] === newUser; }).length;
    if (!duplicatePlayer) {
      this.gameService.createNewPlayer(newPlayer['player'])
        .subscribe(x => {
          if (x) {
            this.router.navigate(['/game/play'], { queryParams: { name: x['name'], id: x['playerId'], numberOfBots: newPlayer['numberOfBots'] } });
          }
        }, err => {
          this.error = err;
        })
    }
    else {
      this.router.navigate(['/game/play'], { queryParams: { name: newPlayer['player'].name, id: newPlayer['player'].id, numberOfBots: newPlayer['numberOfBots'] } });
    }

  }
}

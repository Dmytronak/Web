import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../../shared/services/game.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { Player } from '../../shared/entities/player.view';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRequesting: boolean;
  submitted: boolean = false;
  emailS: string = '';
  error: string = '';
  showForm: boolean;
  brandNew: boolean;
  public players: Player[];
  public playersDb: Player[];
  public playerReq: Player;
  formGroup: FormGroup;

  constructor(private gameService: GameService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) {
    debugger
    this.emailS = localStorage.getItem('email');
    this.playerReq = { email: this.emailS, name: '', id: '' };
    this.formGroup = _formBuilder.group({
      'name': ['', [Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
    debugger
    this.gameService.getExistingPlayers(this.playerReq).subscribe(x => {
      this.players = x['players'];
      console.log(this.players)
    }, error => error);
    this.gameService.getExistingPlayers(this.playerReq).subscribe(x => {
      this.playersDb = x['players'];
      console.log(this.playersDb)
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
    let newUser = newPlayer.name;
    let duplicatePlayer = this.playersDb.filter(x => { return x['name'] === newUser; }).length;
    if (this.formGroup.invalid) {
      return;
    }
    if (!duplicatePlayer) {
      this.gameService.createNewPlayer(newPlayer)
        .subscribe(x => {
          if (x) {
            this.router.navigate(['/game/settings'], { queryParams: { brandNew: true, name: x['name'], email: x['email'], id: x['playerId'] }});
          }
        }, err => {
          debugger
         
            this.error = err;
     
        }
        )
    }
    else {
      this.router.navigate(['/game/settings'], { queryParams: { brandNew: true, name: newPlayer.name, id: newPlayer.id, email: newPlayer.email } });
    }

  }
}

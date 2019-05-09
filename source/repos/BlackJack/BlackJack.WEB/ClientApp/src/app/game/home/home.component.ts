import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../../shared/services/game.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { Player } from '../../shared/entities/player.view';
import { PlayGameCardsViewItem } from '../../shared/entities/play-game.view';
import { PlayGameBotsViewItem } from '../../shared/entities/play-game.view';
import { PlayGame } from '../../shared/entities/play-game.view';
import { Status } from '../../shared/enums/status-type.enum.view';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailS: string = '';
  error: string = '';
  showForm: boolean;
  brandNew: boolean;
  haveActiveGame:boolean= false;
  gameExisting:boolean = false;
  public players: Player[];
  public statusEnum: Status;
  public playersDb: Player[];
  public playerReq: Player;
  cardsGame: PlayGameCardsViewItem = { rank: 0, suit: 0 };
  botsGame: PlayGameBotsViewItem = { name: '', cards: [this.cardsGame] }
  playerGame: PlayGameBotsViewItem = { name: '', cards: [this.cardsGame] }
  createGame: PlayGame = { email: '', status: '0', winner: '', numberOfBots: 0, player: [this.playerGame], bots: [this.botsGame] };
  newPlayer: Player = {id:'',email:'',name:''};
  constructor(private gameService: GameService, private router: Router, private _formBuilder: FormBuilder, private alertService: AlertService) {
    debugger
    this.emailS = localStorage.getItem('email');
    this.playerReq = { email: this.emailS, name: '', id: '' };
  }

  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      if (x) {
        if(x['status'] === Status.NoGames) {
          this.gameExisting = true;
        }
        if(x['status'] !== Status.NoGames) {
        this.haveActiveGame = true;
        }
      }
    },
      err => {
        this.error = err;
      });
  }
  showInput() {
    this.showForm = true;
  }
  continueActiveGame() {
    this.router.navigate(["/game/play"]);
  }
  closeInput() {
    this.showForm = false;
    this.brandNew = false;
  }
  playGame(f) {
    debugger
    this.createGame.email = localStorage.getItem('email')
    this.createGame.numberOfBots =f['numberOfBots'];
      this.gameService.playGame(this.createGame)
      .subscribe(x => {
        if (x) {
          debugger
          this.router.navigate(['/game/play']);
        }
      },
        err => {
          this.error = err;
        });
  }

}

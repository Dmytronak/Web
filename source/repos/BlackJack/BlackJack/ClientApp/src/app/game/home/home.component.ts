import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../../shared/services/game.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { Player } from '../../shared/entities/player.view';
import { PlayGameCardsViewItem } from '../../shared/entities/play-game.view';
import { PlayGameBotsViewItem } from '../../shared/entities/play-game.view';
import { PlayGame } from '../../shared/entities/play-game.view';


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
  public playersDb: Player[];
  public playerReq: Player;
  cardsGame: PlayGameCardsViewItem = { stepRank: 0, stepSuit: 0 };
  botsGame: PlayGameBotsViewItem = { botName: '', botCards: [this.cardsGame] }
  createGame: PlayGame = { gameId: '', playerId: '', status: '', winner: '', playerName: '', numberOfBots: 0, playerCards: [this.cardsGame], bots: [this.botsGame] };
  newPlayer: Player = {id:'',email:'',name:''};
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

    this.gameService.getActiveGame()
    
    .subscribe(x => {
      if (x) {
        if(x['status'] === 'noGames') {
        
          this.gameExisting = true;
        }
        if(x['status'] !=='noGames') {
        this.haveActiveGame = true;
        }
      }
    },
      err => {
        this.error = err;
      });
  }
  addNewPlayer(name: string) {
    debugger
    this.newPlayer.name = name;
    this.newPlayer.email =this.emailS;
    let newUser = this.newPlayer.name;
    let duplicatePlayer = this.playersDb.filter(x => { return x['name'] === newUser; }).length;
    if (!duplicatePlayer) {
      debugger
      this.gameService.createNewPlayer(this.newPlayer)
        .subscribe(x => {
          if(x){ 
            debugger
            this.newPlayer.id = x['playerId']
            this.players.push(this.newPlayer);
            this.brandNew = true;
          }
        }, err => {
          this.error = err;
        })
    }

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
    this.createGame.playerId = f['player'].id;
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

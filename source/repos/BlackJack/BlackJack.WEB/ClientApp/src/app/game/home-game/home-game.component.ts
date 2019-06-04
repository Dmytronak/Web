import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/entities/player.view';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { CardGameViewItem, BotGameViewItem, PlayerGameView, GameView } from 'src/app/shared/entities/game.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.scss']
})
export class HomeGameComponent implements OnInit {
  email: string = '';
  error: string = '';
  showForm: boolean;
  brandNew: boolean;
  haveActiveGame:boolean= false;
  gameExisting:boolean = false;
  cardsGame: CardGameViewItem[];
  botsGame: BotGameViewItem = { name: '', cards: this.cardsGame }
  playerGame: PlayerGameView = { name: '', cards: this.cardsGame }
  createGame: GameView = {status: '0', winner: '', numberOfBots: 0, player: this.playerGame, bots: [this.botsGame] };
  constructor(private gameService: GameService, private router: Router, private _formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      this.haveActiveGame = true;
    },
      err => {
        this.gameExisting = true;
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
  play(f) {
    debugger
    this.createGame.numberOfBots =f['numberOfBots'];
      this.gameService.play(this.createGame)
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

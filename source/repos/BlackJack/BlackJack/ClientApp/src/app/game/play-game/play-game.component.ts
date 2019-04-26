import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { PlayGame, PlayGameCardsViewItem, PlayGameBotsViewItem } from '../../shared/entities/play-game.view';
import { GameService } from '../../shared/services/game.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  error: string = '';
  gameExisting: boolean = false;
  haveActiveGame:boolean = false;
 
  cardsGame: PlayGameCardsViewItem = { stepRank: 0, stepSuit: 0 };
  botsGame: PlayGameBotsViewItem = { botName: '', botCards: [this.cardsGame] }
  playGame: PlayGame = { gameId: '', playerId: '', status: '', winner: '', playerName: '', numberOfBots: 0, playerCards: [this.cardsGame], bots: [this.botsGame] };

  constructor(private gameService: GameService,private router: Router,private alertService: AlertService) {
  }

  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      if (x) {
        debugger
        this.playGame.playerId = x['playerId'];
        this.playGame.playerName = x['playerName'];
        this.playGame.numberOfBots = x['numberOfBots'];
        this.playGame.status = x['status'];
        this.playGame.winner = x['winner'];
        this.playGame.playerCards = x['playerCards'];
        this.playGame.bots = x['bots'];
        this.gameExisting = true;
        this.haveActiveGame =true;
        if (this.playGame.winner !== 'No one') {
          this.gameExisting = false;
        }
      }
    },
      err => {
        this.haveActiveGame =false;
        let errorMessage = { status: 500, message: 'You havent active games! Play new game.' }
        throwError(new Error(errorMessage.message));
        this.error = errorMessage.message;
        return this.alertService.error(errorMessage.message);
      });
  }
  continueGame() {
    this.gameService.continueGame(this.playGame)
      .subscribe(x => {
        if (x) {
          debugger
          this.playGame.gameId = x['gameId'];
          this.playGame.status = x['status'];
          this.playGame.winner = x['winner'];
          this.playGame.playerCards = x['playerCards'];
          this.playGame.bots = x['bots'];
          this.gameExisting = true;
          if (this.playGame.winner !== 'No one') {
            this.gameExisting = false;
          }
        }
      },
        err => {
          this.error = err;
        });
  }
  endGame() {
    this.gameService.endGame(this.playGame)
      .subscribe(x => {
        if (x) {
          debugger
          this.playGame.gameId = x['gameId'];
          this.playGame.status = x['status'];
          this.playGame.winner = x['winner'];
          this.playGame.playerCards = x['playerCards'];
          this.playGame.bots = x['bots'];
          this.gameExisting = false;
        }
      },
        err => {
          this.error = err;
        });
  }
  backToHome(){
    this.router.navigate(['/game/home']);
  }

  playAgain(){
    this.gameService.playGame(this.playGame)
      .subscribe(x => {
        if (x) {
          debugger
          this.playGame.playerId = x['playerId'];
          this.playGame.status = x['status'];
          this.playGame.winner = x['winner'];
          this.playGame.playerCards = x['playerCards'];
          this.playGame.bots = x['bots'];
          this.gameExisting = true;
        }
      },
        err => {
          this.error = err;
        });

  }
}

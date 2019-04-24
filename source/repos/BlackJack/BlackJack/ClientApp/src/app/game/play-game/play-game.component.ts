import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayGame, PlayGameCardsViewItem, PlayGameBotsViewItem } from '../../shared/entities/play-game.view';
import { GameService } from '../../shared/services/game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  error: string = '';
  gameExisting:boolean = false;
  private subscription: Subscription;
  cardsGame: PlayGameCardsViewItem = { stepRank: 0, stepSuit: 0 };
  botsGame: PlayGameBotsViewItem = { botName: '', botCards: [this.cardsGame] }
  playGame: PlayGame = { gameId:'',playerId: '',status:'',winner:'', playerName: '', numberOfBots: 0, playerCards: [this.cardsGame], bots: [this.botsGame] };

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    debugger
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.playGame.playerId = param['id'];
        this.playGame.playerName = param['name'];
        this.playGame.numberOfBots = param['numberOfBots']
      });
      
    this.gameService.playGame(this.playGame)
      .subscribe(x => {
        if (x) {
          debugger
          this.playGame.gameId = x['newGameId'];
          this.playGame.status = x['status'];
          this.playGame.winner = x['winner'];
          this.playGame.playerCards = x['playerCards'];
          this.playGame.bots = x['bots'];
          console.log(this.playGame)
          this.gameExisting = true;
        }
      },
        err => {
          this.error = err;
        });
  }
continueGame()
{
  this.gameService.continueGame(this.playGame)
  .subscribe(x => {
    if (x) {
      debugger
      this.playGame.gameId = x['gameId'];
      this.playGame.status = x['status'];
      this.playGame.winner = x['winner'];
      this.playGame.playerCards = x['playerCards'];
      this.playGame.bots = x['bots'];
      console.log(this.playGame)
      this.gameExisting = true;
      if(this.playGame.winner !=='No one')
      {
        this.gameExisting = false;
      }
    }
  },
    err => {
      this.error = err;
    });

}
endGame()
{
  this.gameService.endGame(this.playGame)
  .subscribe(x => {
    if (x) {
      debugger
      this.playGame.gameId = x['gameId'];
      this.playGame.status = x['status'];
      this.playGame.winner = x['winner'];
      this.playGame.playerCards = x['playerCards'];
      this.playGame.bots = x['bots'];
      console.log(this.playGame)
      this.gameExisting = false;
    }
  },
    err => {
      this.error = err;
    });
 
}

}

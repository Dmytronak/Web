import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { CardPlayGameViewItem, BotPlayGameViewItem, PlayerPlayGameViewItem, PlayGame } from 'src/app/shared/entities/play-game.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  error: string = '';
  gameExisting: boolean = false;
  haveActiveGame:boolean = false;
  public statusEnum: Status;
  headBotSteps= ['Cards'];
  headBots= ['Bots'];
  headPlayerSteps = ['Player name','Player cards'];
  headElements = ['Number of bots', 'Status', 'Winner', ''];
  cardsGame: CardPlayGameViewItem = { rank: 0, suit: 0 };
  bots: BotPlayGameViewItem = { name: '', cards: [this.cardsGame] }
  player: PlayerPlayGameViewItem = { name: '', cards: [this.cardsGame] }
  playGame: PlayGame = { status: '', winner: '', numberOfBots: 0, player: this.player, bots: [this.bots] };

  constructor(private gameService: GameService,private router: Router,private alertService: AlertService) {
  }

  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      this.playGame.numberOfBots = x['numberOfBots'];
      this.statusEnum = x['status'];
      this.playGame.status = Status[this.statusEnum]
      this.playGame.winner = x['winner'];
      this.playGame.player.name = x['player'].name;
      this.playGame.player.cards = x['player'].cards;
      this.playGame.bots = x['bots'];
      this.gameExisting = true;
      this.haveActiveGame = true;
      if (this.playGame.winner !== 'No one') {
        this.gameExisting = false;
      }
    },
      err => {
      
          this.haveActiveGame =false
          return this.error = err.error;
      });
  }
  continue() {
    this.gameService.continue(this.playGame)
      .subscribe(x => {
        if (x) {
          
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player.name = x['player'].name;
          this.playGame.player.cards = x['player'].cards;
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
  end() {
    this.gameService.end(this.playGame)
      .subscribe(x => {
        if (x) {
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player.name = x['player'].name;
          this.playGame.player.cards = x['player'].cards;
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
    this.gameService.play(this.playGame)
      .subscribe(x => {
        if (x) {
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player.name = x['player'].name;
          this.playGame.player.cards = x['player'].cards;
          this.playGame.bots = x['bots'];
          this.gameExisting = true;
        }
      },
        err => {
          this.error = err;
        });

  }
}

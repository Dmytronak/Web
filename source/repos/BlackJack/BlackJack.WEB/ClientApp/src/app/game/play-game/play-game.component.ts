import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayGame, PlayGameCardsViewItem, PlayGameBotsViewItem } from '../../shared/entities/play-game.view';
import { GameService } from '../../shared/services/game.service';
import { AlertService } from '../../shared/services/alert.service';
import { Status } from '../../shared/enums/status-type.enum.view';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
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
  cardsGame: PlayGameCardsViewItem = { rank: 0, suit: 0 };
  bots: PlayGameBotsViewItem = { name: '', cards: [this.cardsGame] }
  player: PlayGameBotsViewItem = { name: '', cards: [this.cardsGame] }
  playGame: PlayGame = { email: '', status: '', winner: '', numberOfBots: 0, player: [this.player], bots: [this.bots] };

  constructor(private gameService: GameService,private router: Router,private alertService: AlertService) {
  }

  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      if (x) {
        this.playGame.email = x['email'];
        this.playGame.numberOfBots = x['numberOfBots'];
        this.statusEnum = x['status'];
        this.playGame.status = Status[this.statusEnum]
        this.playGame.winner = x['winner'];
        this.playGame.player = x['player'];
        this.playGame.bots = x['bots'];
        this.gameExisting = true;
        this.haveActiveGame =true;
        if (this.playGame.winner !== 'No one') {
          this.gameExisting = false;
        }
        
        if(x['status'] === Status.NoGames) {
          this.haveActiveGame =false;
          let errorMessage = { message: 'You havent active games! Play new game.' }
          this.error = errorMessage.message;
        }
      }
    },
      err => {
        return this.alertService.error(err);
      });
  }
  continue() {
    this.gameService.continue(this.playGame)
      .subscribe(x => {
        if (x) {
          
          this.playGame.email = x['email'];
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player = x['player'];
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
          this.playGame.email = x['email'];
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player = x['player'];
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
    this.playGame.email = localStorage.getItem('email');
    this.gameService.play(this.playGame)
      .subscribe(x => {
        if (x) {
          this.playGame.email = x['email'];
          this.statusEnum = x['status'];
          this.playGame.status = Status[this.statusEnum]
          this.playGame.winner = x['winner'];
          this.playGame.player = x['player'];
          this.playGame.bots = x['bots'];
          this.gameExisting = true;
        }
      },
        err => {
          this.error = err;
        });

  }
}

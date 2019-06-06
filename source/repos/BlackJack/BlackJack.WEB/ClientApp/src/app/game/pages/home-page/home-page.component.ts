import { Component, OnInit } from '@angular/core';
import { CardGameViewItem, BotGameViewItem, PlayerGameView, GameView } from 'src/app/shared/entities/game.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
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
  constructor(private gameService: GameService, private router: Router) {
  }
  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(() => {
      this.haveActiveGame = true;
    },
      () => {
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

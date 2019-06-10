import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { ContinueGameView } from 'src/app/shared/entities/game/continue-game.view.';
import { EndGameView } from 'src/app/shared/entities/game/end-game.view';
import { PlayGameView, BotPlayGameViewItem } from 'src/app/shared/entities/game/play-game.view';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayGameComponent implements OnInit {
  error: string = '';
  gameExisting: boolean = false;
  haveActiveGame: boolean = false;
  headBotSteps = ['Cards'];
  headBots = ['Bots'];
  headPlayerSteps = ['Player name', 'Player cards'];
  headElements = ['Number of bots', 'Status', 'Winner', ''];
  playGame: PlayGameView;
  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    this.gameService.getActiveGame()
      .subscribe((x: PlayGameView) => {
        this.playGame = x;
        this.playGame.status = Status[x.status];
        this.gameExisting = true;
        this.haveActiveGame = true;
        if (this.playGame.winner !== 'No one') {
          this.gameExisting = false;
        }
      },
        err => {
          this.haveActiveGame = false
        });
  }
  continue() {
    this.gameService.continue()
      .subscribe((x: ContinueGameView) => {
        if (x) {
          this.playGame.player.cards = x.player.cards;
          this.playGame.status = Status[x.status];
          this.playGame.bots = x.bots;
          this.gameExisting = true;
          if (x.winner !== 'No one') {
            this.gameExisting = false;
          }
        }
      },
        err => {
          this.error = err;
        });
  }
  end() {
    this.gameService.end()
      .subscribe((x: EndGameView) => {
        if (x) {
          this.playGame.player.cards = x.player.cards;
          this.playGame.status = Status[x.status];
          this.playGame.bots = x.bots;
          this.gameExisting = false;
        }
      },
        err => {
          this.error = err;
        });
  }
  backToHome() {
    this.router.navigate(['/game/home']);
  }
  playAgain() {
    let numberOfBots = this.playGame.numberOfBots;
    this.gameService.play(numberOfBots)
      .subscribe((x: PlayGameView) => {
        if (x) {
          this.playGame = x;
          this.playGame.status = Status[x['status']]
          this.gameExisting = true;
        }
      },
        err => {
          this.error = err;
        });
  }
}

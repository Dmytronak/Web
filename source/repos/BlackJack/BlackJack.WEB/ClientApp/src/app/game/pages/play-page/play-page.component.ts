import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { ContinueGameView } from 'src/app/shared/entities/game/continue-game.view.';
import { EndGameView } from 'src/app/shared/entities/game/end-game.view';
import { PlayGameView } from 'src/app/shared/entities/game/play-game.view';
import { takeUntil, map } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayGameComponent extends BaseComponent {
  private numberOfBots: number;
  private playStatus: boolean = false;
  private continueStatus: boolean = false;
  private endStatus: boolean = false;
  private game: boolean = false;
  private haveActiveGame: boolean = false;
  private readonly headBotSteps = ['Cards'];
  private readonly headBots = ['Bots'];
  private readonly headPlayerSteps = ['Player name', 'Player cards'];
  private readonly headElements = ['Number of bots', 'Status', 'Winner', ''];
  private endGameView: EndGameView;
  private continueGameView: ContinueGameView;
  private playGameView: PlayGameView;
  constructor(private gameService: GameService, private router: Router) {
    super();
    this.gameInit();
  }
  ngOnInit() {
  }
  private gameInit(): void {
    this.gameService.getActiveGame()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((playGameView: PlayGameView) => {
        this.numberOfBots = playGameView.numberOfBots;
        this.game = true;
        this.haveActiveGame = true;
        if (playGameView.winner !== 'No one') {
          this.game = false;
        }
        this.playStatus = true;
        this.playGameView = playGameView;
      },
        errorForStatus => {
          this.haveActiveGame = false;
        });
  }
  private continue(): void {
    this.gameService.continue()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((continueGameView: ContinueGameView) => {
        this.game = true;
        if (continueGameView.winner !== 'No one') {
          this.game = false;
        }
        this.playStatus = false;
        this.continueStatus = true;
        this.endStatus = false;
        this.continueGameView = continueGameView;
      });
  }
  private end(): void {
    this.gameService.end()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((endGameView: EndGameView) => {
        this.game = false;
        this.playStatus = false;
        this.continueStatus = false;
        this.endStatus = true;
        this.endGameView = endGameView;
      });
  }
  private playAgain(): void {
    const numberOfBots = this.numberOfBots;
    this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((playGameView: PlayGameView) => {
        this.game = true;
        this.haveActiveGame = true;
        if (playGameView.winner !== 'No one') {
          this.game = false;
        }
        this.continueStatus = false;
        this.endStatus = false;
        this.playStatus = true;
        this.playGameView = playGameView;
      });
  }
  backToHome(): void {
    this.router.navigate(['/game/home']);
  }
}

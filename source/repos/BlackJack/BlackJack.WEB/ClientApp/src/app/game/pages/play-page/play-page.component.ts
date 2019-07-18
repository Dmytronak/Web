import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { ContinueGameView } from 'src/app/shared/entities/game/continue-game.view.';
import { EndGameView } from 'src/app/shared/entities/game/end-game.view';
import { PlayGameView } from 'src/app/shared/entities/game/play-game.view';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayGameComponent extends BaseComponent {
  public StatusType: typeof StatusType = StatusType;
  private numberOfBots: number;
  public activeStatus: StatusType;
  public game: boolean = false;
  public haveActiveGame: boolean = false;
  public readonly headBotSteps = ['Cards'];
  public readonly headBots = ['Bots'];
  public readonly headPlayerSteps = ['Player name', 'Player cards'];
  public readonly headElements = ['Number of bots', 'Status', 'Winner', ''];
  public endGameView: EndGameView;
  public continueGameView: ContinueGameView;
  public playGameView: PlayGameView;
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
        this.activeStatus = StatusType.New;
        this.playGameView = playGameView;
      },
        error => {
          this.haveActiveGame = false;
        });
  }
  public continue(): void {
    this.gameService.continue()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((continueGameView: ContinueGameView) => {
        this.game = true;
        if (continueGameView.winner !== 'No one') {
          this.game = false;
        }
        this.activeStatus = StatusType.Continue;
        this.continueGameView = continueGameView;
      });
  }
  public end(): void {
    this.gameService.end()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((endGameView: EndGameView) => {
        this.game = false;
        this.activeStatus = StatusType.End;
        this.endGameView = endGameView;
      });
  }
  public playAgain(): void {
    const numberOfBots = this.numberOfBots;
    this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((playGameView: PlayGameView) => {
        this.game = true;
        this.haveActiveGame = true;
        if (playGameView.winner !== 'No one') {
          this.game = false;
        }
        this.activeStatus = StatusType.New;
        this.playGameView = playGameView;
      });
  }
}

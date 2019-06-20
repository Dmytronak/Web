import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { GetContinueGameView } from 'src/app/shared/entities/game/get-continue-game.view.';
import { GetEndGameView } from 'src/app/shared/entities/game/get-end-game.view';
import { GetPlayGameView } from 'src/app/shared/entities/game/get-play-game.view';
import { Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  private endSubject = new BehaviorSubject<GetEndGameView>(new GetEndGameView);
  private endView: Observable<GetEndGameView> = this.endSubject.asObservable();
  private continueSubject = new BehaviorSubject<GetContinueGameView>(new GetContinueGameView);
  private continueView: Observable<GetContinueGameView> = this.continueSubject.asObservable();
  private playSubject = new BehaviorSubject<GetPlayGameView>(new GetPlayGameView);
  private playView: Observable<GetPlayGameView> = this.playSubject.asObservable();

  constructor(private gameService: GameService, private router: Router) {
    super();
    this.gameInit();
  }
  ngOnInit() {
  }
  private gameInit(): void {
    this.gameService.getActiveGame()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetPlayGameView) => {
        this.numberOfBots = x.numberOfBots;
        x.status = Status[x.status];
        this.game = true;
        this.haveActiveGame = true;
        if (x.winner !== 'No one') {
          this.game = false;
        }
        this.playStatus = true;
        this.playSubject.next(x);
      },
        errorForStatus => {
          this.haveActiveGame = false;
        });
  }
  private continue(): void {
    this.gameService.continue()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetContinueGameView) => {
        x.status = Status[x['status']]
        this.game = true;
        if (x.winner !== 'No one') {
          this.game = false;
        }
        this.playStatus = false;
        this.continueStatus = true;
        this.endStatus = false;
        this.continueSubject.next(x);
      });

  }
  private end(): void {
    this.gameService.end()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetEndGameView) => {
        x.status = Status[x['status']]
        this.game = false;
        this.playStatus = false;
        this.continueStatus = false;
        this.endStatus = true;
        this.endSubject.next(x);
      });
  }
  private playAgain():void {
    const numberOfBots = this.numberOfBots;
    this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetPlayGameView) => {
        x.status = Status[x.status];
        this.game = true;
        this.haveActiveGame = true;
        if (x.winner !== 'No one') {
          this.game = false;
        }
        this.continueStatus = false;
        this.endStatus = false;
        this.playStatus = true;
        this.playSubject.next(x);
      });
  }
  backToHome(): void {
    this.router.navigate(['/game/home']);
  }
}

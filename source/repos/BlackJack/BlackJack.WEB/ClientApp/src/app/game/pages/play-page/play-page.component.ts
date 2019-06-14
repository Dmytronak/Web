import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { ContinueGameView } from 'src/app/shared/entities/game/continue-game.view.';
import { EndGameView } from 'src/app/shared/entities/game/end-game.view';
import { PlayGameView } from 'src/app/shared/entities/game/play-game.view';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayGameComponent implements OnInit {
  private componetDestroyed: Subject<boolean> = new Subject<boolean>();
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
  private endSubject = new BehaviorSubject<EndGameView>(new EndGameView);
  private endView: Observable<EndGameView> = this.endSubject.asObservable();
  private continueSubject = new BehaviorSubject<ContinueGameView>(new ContinueGameView);
  private continueView: Observable<ContinueGameView> = this.continueSubject.asObservable();
  private playSubject = new BehaviorSubject<PlayGameView>(new PlayGameView);
  private playView: Observable<PlayGameView> = this.playSubject.asObservable();

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    this.gameInit();
  }
  private gameInit(): void {
    this.gameService.getActiveGame()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: PlayGameView) => {
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
      .subscribe((x: ContinueGameView) => {
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
      .subscribe((x: EndGameView) => {
        x.status = Status[x['status']]
        this.game = false;
        this.playStatus = false;
        this.continueStatus = false;
        this.endStatus = true;
        this.endSubject.next(x);
      });
  }
  private playAgain():void {
    let numberOfBots = this.numberOfBots;
    this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: PlayGameView) => {
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
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}

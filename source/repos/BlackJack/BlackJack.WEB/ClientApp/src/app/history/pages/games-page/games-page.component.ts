import { Component, OnInit } from '@angular/core';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryViewItem, GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { DecimalPipe } from '@angular/common';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GamesDetailPageComponent } from '../games-detail-page/games-detail-page.component';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
  providers: [DecimalPipe]
})

export class UserGamesComponent extends BaseComponent {
  protected pageNumber: number = 1;
  protected searchValue = '';
  private gameSubject = new Subject<GameGetAllGamesHistoryViewItem[]>();
  private games = this.gameSubject.asObservable();
  private listCount = new BehaviorSubject<number>(0);
  private readonly headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];

  constructor(private readonly historyService: HistoryService, private readonly pipe: DecimalPipe, private modalService: NgbModal) {
    super();
    this.initTable();
  }
  ngOnInit() {
  }
  private initTable(): void {
    this.historyService.getGamesByUser(this.pageNumber.toString(), this.searchValue)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetAllGamesHistoryView) => {
        this.gameSubject.next(x.games);
        this.listCount = new BehaviorSubject<number>(x.totalGamesCount);
      });
  }
  private onSearchChange(searchValue: string) {
    this.searchValue = searchValue;
    this.initTable();
  }
  private onPageChange = (pageNumber: number) => {
    this.pageNumber = pageNumber;
    this.initTable();
  }
  private bot(game): void {
    const id: string = game.id;
    this.historyService.getBotSteps(id)
      .pipe(takeUntil(this.componetDestroyed),
        tap((botSteps: GetBotStepsHistoryView) => {
            const modalRef = this.modalService.open(GamesDetailPageComponent, { size: 'lg' });
            modalRef.componentInstance.botSteps = botSteps;
          })
      ).subscribe();
  }
  private player(game): void {
    const id: string = game.id;
    this.historyService.getPlayerSteps(id)
      .pipe(takeUntil(this.componetDestroyed),
        tap((playerSteps: GetPlayerStepsHistoryView) => {
            const modalRef = this.modalService.open(GamesDetailPageComponent, { size: 'lg' });
            modalRef.componentInstance.playerSteps = playerSteps;
          })
      ).subscribe();
  }
}

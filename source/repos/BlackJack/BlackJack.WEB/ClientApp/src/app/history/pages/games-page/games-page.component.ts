import { Component } from '@angular/core';
import { GameGetAllGamesHistoryViewItem, GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { DecimalPipe } from '@angular/common';
import { takeUntil, tap } from 'rxjs/operators';
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
  protected searchString: string = '';
  private games: GameGetAllGamesHistoryViewItem[];
  private totalGamesCount: number = 0;
  private readonly headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];

  constructor(private readonly historyService: HistoryService, private readonly pipe: DecimalPipe, private modalService: NgbModal) {
    super();
    this.initTable();
  }
  ngOnInit() {
  }
  private initTable(): void {
    this.historyService.getGamesByUser(this.pageNumber.toString(), this.searchString)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetAllGamesHistoryView) => {
        this.games = x.games;
        this.totalGamesCount = x.totalGamesCount;
      });
  }
  private onSearchChange(searchString: string) {
    this.searchString = searchString;
    this.initTable();
  }
  private onPageChange(pageNumber: number) {
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

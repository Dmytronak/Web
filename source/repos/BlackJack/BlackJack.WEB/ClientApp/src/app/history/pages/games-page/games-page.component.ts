import { Component } from '@angular/core';
import { GameGetAllGamesHistoryViewItem, GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GamesDetailPageComponent } from 'src/app/history/pages/games-detail-page/games-detail-page.component';
import { PaginationModel } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})

export class UserGamesComponent extends BaseComponent {
  protected searchString: string = '';
  private games: GameGetAllGamesHistoryViewItem[];
  private readonly headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  constructor(private readonly historyService: HistoryService, private modalService: NgbModal, private paginationModel: PaginationModel) {
    super();
    this.initTable();
  }
  ngOnInit() {
  }
  private initTable(): void {
    this.historyService.getGamesByUser(this.paginationModel.pageNumber.toString(), this.searchString)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((x: GetAllGamesHistoryView) => {
        this.games = x.games;
        this.paginationModel.collectionSize = x.totalGamesCount;
      });
  }
  private onSearchChange(searchString: string) {
    this.searchString = searchString;
    this.initTable();
  }
  private onPageChange(pageNumber: number) {
    this.paginationModel.pageNumber = pageNumber;
    this.initTable();
  }
  private getBotSteps(game): void {
    const id: string = game.id;
    this.historyService.getBotSteps(id)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((botSteps: GetBotStepsHistoryView) => {
        const modalRef = this.modalService.open(GamesDetailPageComponent, { size: 'lg' });
        modalRef.componentInstance.botSteps = botSteps;
      });
  }
  private getPlayerSteps(game): void {
    const id: string = game.id;
    this.historyService.getPlayerSteps(id)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe((playerSteps: GetPlayerStepsHistoryView) => {
        const modalRef = this.modalService.open(GamesDetailPageComponent, { size: 'lg' });
        modalRef.componentInstance.playerSteps = playerSteps;
      });
  }
}

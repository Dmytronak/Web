import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryViewItem, GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { TableStateHistoryView } from 'src/app/shared/entities/history/table-state-history.view';
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
  private tableState: TableStateHistoryView = {page: 1, pageSize: 8};
  private statusEnum: Status;
  private searchOnTable = new Subject<void>();
  private games: Observable<GameGetAllGamesHistoryViewItem[]>;
  private playerSteps: Observable<GetPlayerStepsHistoryView>;
  private botSteps: Observable<GetBotStepsHistoryView>;
  private getAllGamesHistory: GetAllGamesHistoryView;
  private listCount = new BehaviorSubject<number>(0);
  private readonly headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  private filter = new FormControl('');
  private get page() { return this.tableState.page; }
  private get pageSize() { return this.tableState.pageSize; }
  private set page(page: number) { this.pagination({ page }); }
  private set pageSize(pageSize: number) { this.pagination({ pageSize }); }

  constructor(private readonly historyService: HistoryService, private readonly pipe: DecimalPipe,private modalService: NgbModal) {
    super();
    this.initTable();
  }
  ngOnInit() {
  }
  private initTable():void{
    this.historyService.getGamesByUser()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe((x:GetAllGamesHistoryView) => {
      x.games.forEach(x => {
        x.status = Status[x.status];
      });
      this.getAllGamesHistory = x;
      this.games = this.filterOfTable();
    }); 
  }
  private filterOfTable():Observable<GameGetAllGamesHistoryViewItem[]>{
    return this.filter.valueChanges.pipe(
      startWith(this.filter.value),
      map(text => this.search(text, this.pipe))
    );
  }
  private search(text: string, pipe: PipeTransform): GameGetAllGamesHistoryViewItem[] {
    const result = this.getAllGamesHistory.games.filter(x => {
      const term = text.toLowerCase();
      return x.status.toLowerCase().includes(term)
        || pipe.transform(x.numberOfBots).includes(term)
        || x.winner.toLowerCase().includes(term);
    });
    this.listCount = new BehaviorSubject<number>(result.length);
    const response = result.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    return response;
  }
  private pagination(patch: Partial<TableStateHistoryView>) {
    Object.assign(this.tableState, patch);
    this.searchOnTable.next();
    this.games = this.filterOfTable();
  }
  private bot(game):void {
    const id: string = game.id;
    this.botSteps = this.historyService.getBotSteps(id)
    .pipe(takeUntil(this.componetDestroyed));
    this.botSteps.subscribe();
    const modalRef = this.modalService.open(GamesDetailPageComponent,{ size: 'lg' });
    modalRef.componentInstance.botSteps = this.botSteps;
  }
  private player(game):void {
   const id: string = game.id;
   this.playerSteps = this.historyService.getPlayerSteps(id)
   .pipe(takeUntil(this.componetDestroyed));
    this.playerSteps.subscribe();
    const modalRef = this.modalService.open(GamesDetailPageComponent,{ size: 'lg' });
    modalRef.componentInstance.playerSteps = this.playerSteps;
  }
}

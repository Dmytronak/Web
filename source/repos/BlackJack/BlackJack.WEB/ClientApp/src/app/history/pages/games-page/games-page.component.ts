import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryView, GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subject, of, interval, ReplaySubject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { TableStateHistoryView } from 'src/app/shared/entities/history/table-state-history.view';
@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
  providers: [DecimalPipe]
})

export class UserGamesComponent implements OnInit {
  private tableState: TableStateHistoryView = {page: 1, pageSize: 8};
  private showPlayerTable = false;
  private showBotTable = false;
  private showMainTable = true;
  private statusEnum: Status;
  private searchOnTable = new Subject<void>();
  private componetDestroyed: Subject<boolean> = new Subject<boolean>();
  private games: Observable<GameGetAllGamesHistoryView[]>;
  private playerSteps: Observable<GetPlayerStepsHistoryView>;
  private botSteps: Observable<GetBotStepsHistoryView>;
  private getAllGamesHistory: GetAllGamesHistoryView;
  private listCount = new BehaviorSubject<number>(0);
  private readonly headBotSteps = ['Cards', '', '', ''];
  private readonly headBots = ['Bot name', 'Steps', '', '', '', ''];
  private readonly headPlayerSteps = ['Player name', 'Player steps', '', '', '', ''];
  private readonly headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  private filter = new FormControl('');

  private get page() { return this.tableState.page; }
  private get pageSize() { return this.tableState.pageSize; }
  private set page(page: number) { this.pagination({ page }); }
  private set pageSize(pageSize: number) { this.pagination({ pageSize }); }

  constructor(private readonly historyService: HistoryService, private readonly pipe: DecimalPipe) {
  }
  ngOnInit() {
    this.initTable();
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
  private filterOfTable():Observable<GameGetAllGamesHistoryView[]>{
    return this.filter.valueChanges.pipe(
      startWith(this.filter.value),
      map(text => this.search(text, this.pipe))
    );
  }
  private search(text: string, pipe: PipeTransform): GameGetAllGamesHistoryView[] {
    let result = this.getAllGamesHistory.games.filter(x => {
      const term = text.toLowerCase();
      return x.status.toLowerCase().includes(term)
        || pipe.transform(x.numberOfBots).includes(term)
        || x.winner.toLowerCase().includes(term);
    });
    this.listCount = new BehaviorSubject<number>(result.length);
    let response = result.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    return response;
  }
  private pagination(patch: Partial<TableStateHistoryView>) {
    Object.assign(this.tableState, patch);
    this.searchOnTable.next();
    this.games = this.filterOfTable();
  }
  private bot(id):void {
    this.botSteps = this.historyService.getBotSteps(id)
    .pipe(takeUntil(this.componetDestroyed));
    this.botSteps.subscribe();
    this.showBotTable = true;
    this.showPlayerTable = false;
    this.showMainTable = false;
  }
  private player(id):void {
   this.playerSteps = this.historyService.getPlayerSteps(id)
   .pipe(takeUntil(this.componetDestroyed));
   this.playerSteps.subscribe();
    this.showPlayerTable = true;
    this.showBotTable = false;
    this.showMainTable = false;
  }
  private hideTable():void {
    this.showPlayerTable = false;
    this.showBotTable = false;
    this.showMainTable = true;
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}

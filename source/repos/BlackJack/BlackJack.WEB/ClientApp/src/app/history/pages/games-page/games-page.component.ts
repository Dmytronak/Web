import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryView, GetAllGamesHistoryView } from 'src/app/shared/entities/get-all-games-history.view';
import { CardGetPlayerStepsHistoryViewItem, GetPlayerStepsHistoryView } from 'src/app/shared/entities/get-player-steps-history.view';
import { CardGetBotStepsHistoryViewItem, BotGetBotStepsHistoryViewItem, GetBotStepsHistoryView } from 'src/app/shared/entities/get-bot-steps-history.view';
import { HistoryService } from 'src/app/shared/services/history.service';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface State {
  page: number;
  pageSize: number;
}
@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
  providers: [DecimalPipe]
})

export class UserGamesComponent implements OnInit {
  private _search = new Subject<void>();
  private _state: State = {
    page: 1,
    pageSize: 8
  };
  error: string = ''
  showPlayerTable = false;
  showBotTable = false;
  showMainTable = true;
  public statusEnum: Status;
  gameGetAllGamesHistory: GameGetAllGamesHistoryView[];
  getAllGamesHistory: GetAllGamesHistoryView = { games: this.gameGetAllGamesHistory };
  cardGetPlayerStepsHistory: CardGetPlayerStepsHistoryViewItem[];
  getPlayerStepsHistory: GetPlayerStepsHistoryView = { gameId: '', name: '', steps: this.cardGetPlayerStepsHistory }
  cardGetBotStepsHistory: CardGetBotStepsHistoryViewItem[];
  botGetBotStepsHistory: BotGetBotStepsHistoryViewItem = { name: '', steps: this.cardGetBotStepsHistory };
  getBotStepsHistory: GetBotStepsHistoryView = { gameId: '', bots: [this.botGetBotStepsHistory] };
  listCount = new BehaviorSubject<number>(0);
  headBotSteps = ['Cards', '', '', ''];
  headBots = ['Bot name', 'Steps', '', '', '',''];
  headPlayerSteps = ['Player name', 'Player steps', '', '','',''];
  headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  games$: Observable<GameGetAllGamesHistoryView[]>;
  filter = new FormControl('');
  constructor(private historyService: HistoryService, private pipe: DecimalPipe) {
  }
  ngOnInit() {
    this.historyService.getGamesByUser().subscribe(x => {
      this.getAllGamesHistory.games = x['games'];
      this.getAllGamesHistory.games.forEach(x => {
        x.status = Status[x.status];
      });
      this.games$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
    }, error => error);
  }

  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search.next();
    this.games$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.pipe))
    );
  }
  search(text: string, pipe: PipeTransform): GameGetAllGamesHistoryView[] {
    let result = this.getAllGamesHistory.games.filter(x => {
      const term = text.toLowerCase();
      return x.status.toLowerCase().includes(term)
        || pipe.transform(x.numberOfBots).includes(term)
        || x.winner.toLowerCase().includes(term);
    });
    this.listCount = new BehaviorSubject<number>(result.length);
    return result.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  bot(x) {
    this.getBotStepsHistory.gameId = x.id;
    this.historyService.getBotSteps(this.getBotStepsHistory).subscribe(x => {
      this.getBotStepsHistory.bots = x['bots'];
    }, error => error);
    this.showBotTable = true;
    this.showPlayerTable = false;
    this.showMainTable = false;
  }
  player(x) {
    this.getPlayerStepsHistory.gameId = x.id;
    this.historyService.getPlayerSteps(this.getPlayerStepsHistory).subscribe(x => {
      this.getPlayerStepsHistory.name = x['name'];
      this.getPlayerStepsHistory.steps = x['steps'];
    }, error => error);
    this.showPlayerTable = true;
    this.showBotTable = false;
    this.showMainTable = false;
  }
  hideTable() {
    this.showPlayerTable = false;
    this.showBotTable = false;
    this.showMainTable = true;
    this.getPlayerStepsHistory.steps = null;
    this.getBotStepsHistory.bots = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryView, HistoryGame } from 'src/app/shared/entities/history-game.view';
import { PlayerPlayerStepsHistoryViewItem, PlayerSteps } from 'src/app/shared/entities/player-steps.view';
import { CardBotStepsHistoryViewItem, BotBotStepsHistoryViewItem, BotSteps } from 'src/app/shared/entities/bot-steps.view';
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
  selector: 'app-user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.scss'],
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
  game: GameGetAllGamesHistoryView = { id: '', numberOfBots: 0, status: '', winner: '' };
  historyGames: HistoryGame = { games: [this.game] };
  playerStepsItem:PlayerPlayerStepsHistoryViewItem={rank:0,suit:0};
  playerSteps: PlayerSteps = {gameId:'', name:'',playerSteps:[this.playerStepsItem]}
  cards:CardBotStepsHistoryViewItem={rank:0,suit:0};
  bots:BotBotStepsHistoryViewItem={name:'',steps:[this.cards]};
  allBotSteps: BotSteps={gameId:'', bots:[this.bots]};
  listCount =  new BehaviorSubject<number>(0);
  headBotSteps= ['Cards','','',''];
  headBots= ['Bot name', 'Steps','','',''];
  headPlayerSteps = ['Player name','Player steps','',''];
  headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  games$: Observable<GameGetAllGamesHistoryView[]>;
  games1$: GameGetAllGamesHistoryView[];
  filter = new FormControl('');
  constructor(private historyService: HistoryService, private pipe: DecimalPipe){
  }
  ngOnInit() {
    this.historyService.getGamesByUser().subscribe(x => {
      this.historyGames.games = x['games'];
      this.games$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
      this.historyGames.games.forEach(x => {
        x.status = Status[x.status];
      });
    }, error => error);
  }
 
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search.next();
    this.games$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.pipe))
    );
  }
  search(text: string, pipe: PipeTransform): GameGetAllGamesHistoryView[] {
    let result = this.historyGames.games.filter(x => {
    const term = text.toLowerCase();
    return x.status.toLowerCase().includes(term)   
        || pipe.transform(x.numberOfBots).includes(term)
        || x.winner.toLowerCase().includes(term);
      });
      this.listCount = new BehaviorSubject<number>(result.length);
    return result.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
  bot(x) {
    this.allBotSteps.gameId = x.id;
    this.historyService.getBotSteps(this.allBotSteps).subscribe(x => {
    this.allBotSteps.bots= x['bots'];
    }, error => error);
    this.showBotTable = true;
    this.showPlayerTable = false;
    this.showMainTable = false;
  }
  player(x) {
    this.playerSteps.gameId = x.id;
    this.historyService.getPlayerSteps(this.playerSteps).subscribe(x => {
      this.playerSteps.name = x['name'];
      this.playerSteps.playerSteps = x['playerSteps'];
    }, error => error);
    this.showPlayerTable = true;
    this.showBotTable = false;
    this.showMainTable = false;
  }
  hideTable() {
    this.showPlayerTable = false;
    this.showBotTable = false;
    this.showMainTable = true;
    this.playerSteps.playerSteps = null;
    this.allBotSteps.bots=null;
  }
}

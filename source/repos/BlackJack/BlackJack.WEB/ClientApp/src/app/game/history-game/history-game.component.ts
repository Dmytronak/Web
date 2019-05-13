import { Component, OnInit } from '@angular/core';
import { HistoryGame, GameGetAllGamesHistoryView } from '../../shared/entities/history-game.view';
import { HistoryService } from '../../shared/services/history.service';
import { PlayerSteps, PlayerPlayerStepsHistoryViewItem } from '../../shared/entities/player-steps.view';
import { BotSteps, BotBotStepsHistoryViewItem, CardBotStepsHistoryViewItem } from '../../shared/entities/bot-steps.view';
import { Status } from '../../shared/enums/status-type.enum.view';

@Component({
  selector: 'app-history-game',
  templateUrl: './history-game.component.html',
  styleUrls: ['./history-game.component.css']
})
export class HistoryGameComponent implements OnInit {
  error: string = '';
  showPlayerTable = false;
  showBotTable = false;
  showMainTable = true;
  public statusEnum: Status;
  email: string = localStorage.getItem('email');
  game: GameGetAllGamesHistoryView = { id: '', numberOfBots: 0, status: '', winner: '' };
  historyGames: HistoryGame = { email: this.email, games: [this.game] };
  playerStepsItem:PlayerPlayerStepsHistoryViewItem={rank:0,suit:0};
  playerSteps: PlayerSteps = {gameId:'', name:'',playerSteps:[this.playerStepsItem]}
  cards:CardBotStepsHistoryViewItem={rank:0,suit:0};
  bots:BotBotStepsHistoryViewItem={name:'',steps:[this.cards]};
  allBotSteps: BotSteps={gameId:'', bots:[this.bots]};
  page = 1;
  pageSize = 9;
  listCount:number;
  headBotSteps= ['Cards','','',''];
  headBots= ['Bot name', 'Steps','','',''];
  headPlayerSteps = ['Player name','Player steps','',''];
  headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getGamesByUser(this.historyGames).subscribe(x => {
      this.historyGames.games = x['games'];
      this.listCount = this.historyGames.games.length;
      this.historyGames.games.forEach(x => {
        x.status = Status[x.status];
      });
    }, error => error);
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

import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status-type.enum.view';
import { GameGetAllGamesHistoryView, HistoryGame } from 'src/app/shared/entities/history-game.view';
import { PlayerPlayerStepsHistoryViewItem, PlayerSteps } from 'src/app/shared/entities/player-steps.view';
import { CardBotStepsHistoryViewItem, BotBotStepsHistoryViewItem, BotSteps } from 'src/app/shared/entities/bot-steps.view';
import { HistoryService } from 'src/app/shared/services/history.service';

@Component({
  selector: 'app-user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.scss']
})
export class UserGamesComponent implements OnInit {
  error: string = '';
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
  page = 1;
  pageSize = 9;
  listCount:number;
  headBotSteps= ['Cards','','',''];
  headBots= ['Bot name', 'Steps','','',''];
  headPlayerSteps = ['Player name','Player steps','',''];
  headElements = ['Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getGamesByUser().subscribe(x => {
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

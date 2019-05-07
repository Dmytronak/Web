import { Component, OnInit } from '@angular/core';
import { HistoryGame, GetAllGamesViewItem } from '../../shared/entities/history-game.view';
import { HistoryService } from '../../shared/services/history.service';
import { PlayerSteps, PlayerStepsViewItem } from '../../shared/entities/player-steps.view';
import { BotSteps, BotStepsHistoryViewItem, BotCardViewItem } from '../../shared/entities/bot-steps.view';
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
  emailS: string = localStorage.getItem('email');
  game: GetAllGamesViewItem = { id: '', playerName: '', numberOfBots: 0, status: '', winner: '' };
  historyGames: HistoryGame = { email: this.emailS, games: [this.game] };
  playerStepsItem:PlayerStepsViewItem={rank:0,suit:0};
  playerSteps: PlayerSteps = {gameId:'',playerStepsOfGame:[this.playerStepsItem]}
  botCards:BotCardViewItem={rank:0,suit:0};
  bots:BotStepsHistoryViewItem={Name:'',botSteps:[this.botCards]};
  allBotSteps: BotSteps={gameId:'', botSteps:[this.bots]};
  page = 1;
  pageSize = 9;
  listOfGamesCount:number;
  headBotSteps= ['Cards','','',''];
  headBots= ['Bot name', 'Steps','','',''];
  headPlayerSteps = ['Player steps','','',''];
  headElements = ['Player name', 'Number of bots', 'Status', 'Winner', 'Steps of Bots and players'];
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getGamesByUser(this.historyGames).subscribe(x => {
      this.historyGames.games = x['games'];
      this.listOfGamesCount = this.historyGames.games.length;
      this.historyGames.games.forEach(x => {
        x.status = Status[x.status];
      });
    }, error => error);

  }
  showBotSteps(x) {
    debugger
    this.allBotSteps.gameId = x.id;
    this.historyService.getBotSteps(this.allBotSteps).subscribe(x => {
    this.allBotSteps.botSteps= x['botSteps'];
    }, error => error);
    this.showBotTable = true;
    this.showPlayerTable = false;
    this.showMainTable = false;

  }
  showPlayerSteps(x) {
    debugger
    this.playerSteps.gameId = x.id;
    this.historyService.getPlayerSteps(this.playerSteps).subscribe(x => {
      this.playerSteps.playerStepsOfGame = x['playerStepsOfGame'];
    }, error => error);
    this.showPlayerTable = true;
    this.showBotTable = false;
    this.showMainTable = false;
  
  }
  hideStepTable() {
    this.showPlayerTable = false;
    this.showBotTable = false;
    this.showMainTable = true;
    this.playerSteps.playerStepsOfGame = null;
    this.allBotSteps.botSteps=null;
  }
}

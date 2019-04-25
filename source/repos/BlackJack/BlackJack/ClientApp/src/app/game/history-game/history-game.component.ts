import { Component, OnInit } from '@angular/core';
import { HistoryGame, GetAllGamesViewItem } from '../../shared/entities/history-game.view';
import { HistoryService } from '../../shared/services/history.service';
import { PlayerSteps, PlayerStepsViewItem } from '../../shared/entities/player-steps.view';
import { BotSteps, BotStepsHistoryViewItem, BotCardViewItem } from '../../shared/entities/bot-steps.view';

@Component({
  selector: 'app-history-game',
  templateUrl: './history-game.component.html',
  styleUrls: ['./history-game.component.css']
})
export class HistoryGameComponent implements OnInit {
  error: string = '';
  showPlayerTable = false;
  showBotTable = false;
  emailS: string = localStorage.getItem('email');
  game: GetAllGamesViewItem = { id: '', playerName: '', numberOfBots: 0, status: '', winner: '' };
  historyGames: HistoryGame = { email: this.emailS, games: [this.game] };
  playerStepsItem:PlayerStepsViewItem={stepRank:0,stepSuit:0};
  playerSteps: PlayerSteps = {gameId:'',playerStepsOfGame:[this.playerStepsItem]}
  botCards:BotCardViewItem={stepRank:0,stepSuit:0};
  bots:BotStepsHistoryViewItem={botName:'',botSteps:[this.botCards]};
  allBotSteps: BotSteps={gameId:'', botSteps:[this.bots]};

  headBotSteps= ['Cards'];
  headBots= ['Bot name', 'Steps'];
  headPlayerSteps = ['Cards'];
  headElements = ['PlayerName', 'Number of bots', 'Status', 'Winner', ''];
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getGamesByUser(this.historyGames).subscribe(x => {
      this.historyGames.games = x['games'];
      console.log(this.historyGames);
    }, error => error);
  }
  showBotSteps(x) {
    debugger
    this.allBotSteps.gameId = x.id;
    this.historyService.getBotSteps(this.allBotSteps).subscribe(x => {
    this.allBotSteps.botSteps= x['botSteps'];
      console.log(this.allBotSteps.botSteps);
    }, error => error);
    this.showBotTable = true;
    this.showPlayerTable = false;

  }
  showPlayerSteps(x) {
    debugger
    this.playerSteps.gameId = x.id;
    this.historyService.getPlayerSteps(this.playerSteps).subscribe(x => {
      this.playerSteps.playerStepsOfGame = x['playerStepsOfGame'];
      console.log( this.playerSteps.playerStepsOfGame);
    }, error => error);
    this.showPlayerTable = true;
    this.showBotTable = false;

  }
  hideStepTable() {
    this.showPlayerTable = false;
    this.showBotTable = false;
  }
}

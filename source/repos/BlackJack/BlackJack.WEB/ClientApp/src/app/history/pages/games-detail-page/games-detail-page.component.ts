import { Component, OnInit, Input } from '@angular/core';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-games-detail-page',
  templateUrl: './games-detail-page.component.html',
  styleUrls: ['./games-detail-page.component.scss']
})
export class GamesDetailPageComponent extends BaseComponent {
  @Input() botSteps: Observable<GetBotStepsHistoryView>;
  @Input() playerSteps: Observable<GetPlayerStepsHistoryView>;
  private readonly headBots = ['Bot name', 'Steps', '', '', '', '', '', ''];
  private readonly headPlayerSteps = ['Player name', 'Player steps', '', '', '', ''];
  constructor() {
    super();
   }
   private hideTable():void {
    this.botSteps = null;
    this.playerSteps = null;
  }
}

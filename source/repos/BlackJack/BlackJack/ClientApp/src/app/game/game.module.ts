import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routing }  from './game.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../shared/guards/onlyLoggedOutUsers.guard';
import { GameService } from '../shared/services/game.service';
import { AlertService } from '../shared/services/alert.service';
import { PlayGameComponent } from './play-game/play-game.component';
import { HistoryGameComponent } from './history-game/history-game.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [RootComponent,HomeComponent, PlayGameComponent, HistoryGameComponent],
  exports:      [ ],
  providers:    [AuthGuard,GameService,AlertService]
})
export class GameModule { }

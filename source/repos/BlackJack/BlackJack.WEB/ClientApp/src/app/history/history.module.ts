import { NgModule, Pipe } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { UserGamesComponent } from './pages/games-page/games-page.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryComponent } from './history.component';
import { GamesDetailPageComponent } from './pages/games-detail-page/games-detail-page.component';

@NgModule({
  declarations: [UserGamesComponent, HistoryComponent, GamesDetailPageComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
  ], 
  providers: [DecimalPipe]
})
export class HistoryModule { }

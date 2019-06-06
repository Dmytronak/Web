import { NgModule, Pipe } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { UserGamesComponent } from './pages/games-page/games-page.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [UserGamesComponent, HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
  ], 
  providers: [DecimalPipe]
})
export class HistoryModule { }

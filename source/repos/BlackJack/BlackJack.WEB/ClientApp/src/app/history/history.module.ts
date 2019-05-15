import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { UserGamesComponent } from './user-games/user-games.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserGamesComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
  ]
})
export class HistoryModule { }

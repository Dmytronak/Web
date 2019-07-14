import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HistoryRoutingModule } from 'src/app/history/history-routing.module';
import { UserGamesComponent } from 'src/app/history/pages/games-page/games-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoryComponent } from 'src/app/history/history.component';
import { GamesDetailPageComponent } from 'src/app/history/pages/games-detail-page/games-detail-page.component';
@NgModule({
  declarations: [UserGamesComponent, HistoryComponent, GamesDetailPageComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
  ], 
  entryComponents: [GamesDetailPageComponent],
  providers: [DecimalPipe]
})
export class HistoryModule { }

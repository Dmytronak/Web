import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from 'src/app/game/game-routing.module';
import { HomeGameComponent } from 'src/app/game/pages/home-page/home-page.component';
import { PlayGameComponent } from 'src/app/game/pages/play-page/play-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameComponent } from 'src/app/game/game.component';
@NgModule({
  declarations: [HomeGameComponent, PlayGameComponent, GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
  ],
})
export class GameModule { }

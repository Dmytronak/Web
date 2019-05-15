import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { HomeGameComponent } from './home-game/home-game.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { RootGameComponent } from './root-game/root-game.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeGameComponent, PlayGameComponent, RootGameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }

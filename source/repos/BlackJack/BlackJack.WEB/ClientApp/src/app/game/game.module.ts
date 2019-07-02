import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { HomeGameComponent } from './pages/home-page/home-page.component';
import { PlayGameComponent } from './pages/play-page/play-page.component';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game.component';
import {SelectModule} from 'ng2-select';
const gameComponents = [HomeGameComponent, PlayGameComponent, GameComponent];
@NgModule({
  declarations: [...gameComponents],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    SelectModule
  ],
})
export class GameModule { }

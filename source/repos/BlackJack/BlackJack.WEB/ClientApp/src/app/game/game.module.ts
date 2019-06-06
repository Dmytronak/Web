import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { HomeGameComponent } from './home/home.component';
import { PlayGameComponent } from './play/play.component';
import { RootGameComponent } from './root/root.component';
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

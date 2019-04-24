import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routing }  from './game.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from '../shared/guards/onlyLoggedOutUsers.guard';
import { SettingsComponent } from './settings/settings.component';
import { GameService } from '../shared/services/game.service';
import { AlertService } from '../shared/services/alert.service';
import { PlayGameComponent } from './play-game/play-game.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [RootComponent,HomeComponent, SettingsComponent, PlayGameComponent],
  exports:      [ ],
  providers:    [AuthGuard,GameService,AlertService]
})
export class GameModule { }

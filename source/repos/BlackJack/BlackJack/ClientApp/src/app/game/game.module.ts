import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';

import { routing }  from './game.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from '../shared/guards/onlyLoggedOutUsers.guard';
import { SettingsComponent } from './settings/settings.component';
import { GameService } from '../shared/services/game.service';
import { AlertService } from '../shared/services/alert.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [RootComponent,HomeComponent, SettingsComponent],
  exports:      [ ],
  providers:    [AuthGuard,GameService,AlertService]
})
export class GameModule { }

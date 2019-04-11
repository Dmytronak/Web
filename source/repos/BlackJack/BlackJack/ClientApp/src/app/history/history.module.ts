import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';

import { routing }  from './history.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { HistoryService } from './services/history.service';

import { AuthGuard } from '../shared/guard/auth.guard';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [RootComponent,HomeComponent, SettingsComponent],
  exports:      [ ],
  providers:    [AuthGuard,HistoryService],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ]
})
export class HistoryModule { }

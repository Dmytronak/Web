import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGamesComponent } from './user-games/user-games.component';
const routes: Routes = [
  { path: '', component: UserGamesComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }

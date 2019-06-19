import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedOut } from './shared/guards/only-logged-out-users.guard';
import { OnlyLoggedIn } from './shared/guards/only-logged-in-users.guard';

const routes: Routes = [
  {path: 'home',loadChildren: './home/home.module#HomeModule',canActivate: [OnlyLoggedOut]},
  {path: 'auth',loadChildren: './auth/auth.module#AuthModule',canActivate: [OnlyLoggedOut]},
  {path: 'game',loadChildren: './game/game.module#GameModule',canActivate: [OnlyLoggedIn]},
  {path: 'history',loadChildren: './history/history.module#HistoryModule',canActivate: [OnlyLoggedIn]},
  {path: 'shared',loadChildren: './shared/shared.module#SharedModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

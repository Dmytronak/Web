import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedOut } from 'src/app/shared/guards/only-logged-out-users.guard';
import { OnlyLoggedIn } from 'src/app/shared/guards/only-logged-in-users.guard';

const routes: Routes = [
  {path: 'home',loadChildren: 'src/app/home/home.module#HomeModule',canActivate: [OnlyLoggedOut]},
  {path: 'auth',loadChildren: 'src/app/auth/auth.module#AuthModule',canActivate: [OnlyLoggedOut]},
  {path: 'game',loadChildren: 'src/app/game/game.module#GameModule',canActivate: [OnlyLoggedIn]},
  {path: 'history',loadChildren: 'src/app/history/history.module#HistoryModule',canActivate: [OnlyLoggedIn]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

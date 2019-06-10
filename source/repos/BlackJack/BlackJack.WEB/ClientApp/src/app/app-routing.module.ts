import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/only-logged-out-users.guard';
import { AuthUsersGuard } from './shared/guards/only-logged-in-users.guard';

const routes: Routes = [
  {path: 'home',loadChildren: './home/home.module#HomeModule',canActivate: [AuthUsersGuard]},
  {path: 'auth',loadChildren: './auth/auth.module#AuthModule',canActivate: [AuthUsersGuard]},
  {path: 'game',loadChildren: './game/game.module#GameModule',canActivate: [AuthGuard]},
  {path: 'history',loadChildren: './history/history.module#HistoryModule',canActivate: [AuthGuard]},
  {path: 'shared',loadChildren: './shared/shared.module#SharedModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

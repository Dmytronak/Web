import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedOut } from 'src/app/shared/guards/only-logged-out-users.guard';
import { OnlyLoggedIn } from 'src/app/shared/guards/only-logged-in-users.guard';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule), canActivate: [OnlyLoggedOut]},
  {path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule), canActivate: [OnlyLoggedOut]},
  {path: 'game', loadChildren: () => import('src/app/game/game.module').then(m => m.GameModule), canActivate: [OnlyLoggedIn]},
  {path: 'history', loadChildren: () => import('src/app/history/history.module').then(m => m.HistoryModule), canActivate: [OnlyLoggedIn]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

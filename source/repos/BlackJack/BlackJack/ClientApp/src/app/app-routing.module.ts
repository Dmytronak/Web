import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard}  from '..//app/shared/guard/auth.guard';
import { RootComponent } from './game/root/root.component';


const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'game', component: RootComponent, canActivate: [AuthGuard] },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
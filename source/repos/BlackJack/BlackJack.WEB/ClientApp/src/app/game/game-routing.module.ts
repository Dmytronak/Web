import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGameComponent } from './pages/home-page/home-page.component';
import { PlayGameComponent } from './pages/play-page/play-page.component';
import { GameComponent } from './game.component';

const routes: Routes = [ 
  { path: '', component: GameComponent, 
  children:[{ 
    path: 'home',  component: HomeGameComponent },
  { path: 'play',  component: PlayGameComponent }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

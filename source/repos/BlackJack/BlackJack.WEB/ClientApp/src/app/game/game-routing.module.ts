import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGameComponent } from './home-game/home-game.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { RootGameComponent } from './root-game/root-game.component';

const routes: Routes = [ 
  { path: '', component: RootGameComponent, 
  children:[{ 
    path: 'home',  component: HomeGameComponent },
  { path: 'play',  component: PlayGameComponent }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

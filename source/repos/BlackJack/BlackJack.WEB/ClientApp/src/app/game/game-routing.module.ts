import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGameComponent } from './home/home.component';
import { PlayGameComponent } from './play/play.component';
import { RootGameComponent } from './root/root.component';

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

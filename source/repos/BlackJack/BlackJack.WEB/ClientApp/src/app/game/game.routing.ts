import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 
import { HistoryGameComponent }    from './history-game/history-game.component'; 
import { PlayGameComponent }    from './play-game/play-game.component'; 
import { AuthGuard } from '../shared/guards/onlyLoggedOutUsers.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'game',
      component: RootComponent, canActivate: [AuthGuard],

      children: [      
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'history',  component: HistoryGameComponent },
       { path: 'play',  component: PlayGameComponent },
      ]       
    }  
]);


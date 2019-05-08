import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../configs/url.config';
import { Router } from '@angular/router';
import { HistoryGame } from '../entities/history-game.view';
import { PlayerSteps } from '../entities/player-steps.view';
import { BotSteps } from '../entities/bot-steps.view';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  baseUrl: string = '';
  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.baseUrl = configService.getApiURI();
   }
   getGamesByUser(history:HistoryGame) {
    let params = new HttpParams().set("email",history.email); 
    return this.http.get<HistoryGame[]>(this.baseUrl + "/history/allUserGames", { params:params })
   }
   getPlayerSteps(history:PlayerSteps) {
   
    let params = new HttpParams().set("gameId",history.gameId); 
    return this.http.get<HistoryGame[]>(this.baseUrl + "/history/playerSteps", { params:params })
   }
   getBotSteps(history:BotSteps) {
    
    let params = new HttpParams().set("gameId",history.gameId); 
    return this.http.get<HistoryGame[]>(this.baseUrl + "/history/botSteps", { params:params })
   }
}

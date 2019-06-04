import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../configs/url.config';
import { Router } from '@angular/router';
import { GetAllGamesHistoryView } from '../entities/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from '../entities/get-player-steps-history.view';
import { GetBotStepsHistoryView } from '../entities/get-bot-steps-history.view';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  baseUrl: string = '';
  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.baseUrl = configService.getApiURI();
   }
   getGamesByUser() {
    return this.http.get<GetAllGamesHistoryView[]>(this.baseUrl + "/history/allUserGames");
   }
   getPlayerSteps(history:GetPlayerStepsHistoryView) {
    let params = new HttpParams().set("gameId",history.gameId); 
    return this.http.get<GetAllGamesHistoryView[]>(this.baseUrl + "/history/playerSteps", { params:params });
   }
   getBotSteps(history:GetBotStepsHistoryView) {
    let params = new HttpParams().set("gameId",history.gameId); 
    return this.http.get<GetAllGamesHistoryView[]>(this.baseUrl + "/history/botSteps", { params:params });
   }
}

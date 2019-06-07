import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GetAllGamesHistoryView } from '../entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from '../entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from '../entities/history/get-bot-steps-history.view';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  baseUrl: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }
   getGamesByUser() {
    return this.http.get<GetAllGamesHistoryView>(this.baseUrl + "/history/allUserGames");
   }
   getPlayerSteps(x) {
    let params = new HttpParams().set("gameId",x.id); 
    return this.http.get<GetPlayerStepsHistoryView>(this.baseUrl + "/history/playerSteps", { params:params });
   }
   getBotSteps(x) {
    let params = new HttpParams().set("gameId",x.id); 
    return this.http.get<GetBotStepsHistoryView>(this.baseUrl + "/history/botSteps", { params:params });
   }
}

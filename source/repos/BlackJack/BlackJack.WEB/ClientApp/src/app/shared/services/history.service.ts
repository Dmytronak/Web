import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GetAllGamesHistoryView } from '../entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from '../entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from '../entities/history/get-bot-steps-history.view';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private readonly http: HttpClient) {
   }
   public getGamesByUser(pageNumber:string,searchString:string):Observable<GetAllGamesHistoryView>{
    const params = {
      pageNumber:pageNumber,
      searchString:searchString
    };
     return this.http.get<GetAllGamesHistoryView>(`${environment.baseUrl}/history/allUserGames`,{params:params});
   }
   public getPlayerSteps(id:string): Observable<GetPlayerStepsHistoryView> {
    const params = {
      gameId:id
    }; 
    return this.http.get<GetPlayerStepsHistoryView>(`${environment.baseUrl}/history/getPlayerSteps`, { params:params });
   }
   public getBotSteps(id:string): Observable<GetBotStepsHistoryView>{
    const params = {
      gameId:id
    };
    return this.http.get<GetBotStepsHistoryView>(`${environment.baseUrl}/history/getBotSteps`, { params:params });
   }
}

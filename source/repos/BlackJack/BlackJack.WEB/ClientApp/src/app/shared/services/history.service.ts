import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetAllGamesHistoryView } from 'src/app/shared/entities/history/get-all-games-history.view';
import { GetPlayerStepsHistoryView } from 'src/app/shared/entities/history/get-player-steps-history.view';
import { GetBotStepsHistoryView } from 'src/app/shared/entities/history/get-bot-steps-history.view';
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
     return this.http.get<GetAllGamesHistoryView>(`${environment.baseUrl}/history/getAllGames`,{params:params});
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

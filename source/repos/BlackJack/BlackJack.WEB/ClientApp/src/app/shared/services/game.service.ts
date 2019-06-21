import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetPlayGameView } from '../entities/game/get-play-game.view';
import { Observable } from 'rxjs';
import { GetContinueGameView } from '../entities/game/get-continue-game.view.';
import { GetEndGameView } from '../entities/game/get-end-game.view';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl: string = '';
  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  public getActiveGame():Observable<GetPlayGameView> {
    return this.http.get<GetPlayGameView>(`${this.baseUrl}/game/getActive`);
  }
  public play(numberOfBots):Observable<GetPlayGameView> {
    const params = {numberOfBots: numberOfBots};
    return this.http.get<GetPlayGameView>(`${this.baseUrl}/game/getPlay`,{params:params});
  }
  public continue():Observable<GetContinueGameView> {
    return this.http.get<GetContinueGameView>(`${this.baseUrl}/game/getContinue`);
  }
  public end():Observable<GetEndGameView> {
    return this.http.get<GetEndGameView>(`${this.baseUrl}/game/getEnd`);
  }
}


import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlayGameView } from '../entities/game/play-game.view';
import { Observable } from 'rxjs';
import { ContinueGameView } from '../entities/game/continue-game.view.';
import { EndGameView } from '../entities/game/end-game.view';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl: string = '';
  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  public getActiveGame():Observable<PlayGameView> {
    return this.http.get<PlayGameView>(`${this.baseUrl}/game/getActive`);
  }
  public play(numberOfBots):Observable<PlayGameView> {
    const params = {numberOfBots: numberOfBots};
    return this.http.get<PlayGameView>(`${this.baseUrl}/game/play`,{params:params});
  }
  public continue():Observable<ContinueGameView> {
    return this.http.get<ContinueGameView>(`${this.baseUrl}/game/continue`);
  }
  public end():Observable<EndGameView> {
    return this.http.get<EndGameView>(`${this.baseUrl}/game/end`);
  }
}


import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PlayGameView } from 'src/app/shared/entities/game/play-game.view';
import { Observable } from 'rxjs';
import { ContinueGameView } from 'src/app/shared/entities/game/continue-game.view.';
import { EndGameView } from 'src/app/shared/entities/game/end-game.view';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private readonly http: HttpClient) {
  }
  public getActiveGame():Observable<PlayGameView> {
    return this.http.get<PlayGameView>(`${environment.baseUrl}/game/getActive`);
  }
  public play(numberOfBots):Observable<PlayGameView> {
    const params = {
      numberOfBots: numberOfBots
    };
    return this.http.get<PlayGameView>(`${environment.baseUrl}/game/play`,{ params:params });
  }
  public continue():Observable<ContinueGameView> {
    return this.http.get<ContinueGameView>(`${environment.baseUrl}/game/continue`);
  }
  public end():Observable<EndGameView> {
    return this.http.get<EndGameView>(`${environment.baseUrl}/game/end`);
  }
}


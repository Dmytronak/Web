import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlayGameView } from '../entities/game/play-game.view';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  getActiveGame():Observable<PlayGameView> {
    return this.http.get<PlayGameView>(this.baseUrl + "/game/getActive");
  }
  play(x):Observable<PlayGameView> {
    let params = new HttpParams().set("numberOfBots",x); 
    return this.http.post(this.baseUrl + "/game/play?"+params,'')
    .pipe(map((x: PlayGameView) => {
      return x;
    }));
  }
  continue():Observable<ContinueGameView> {
    return this.http.post(this.baseUrl + "/game/continue", '')
    .pipe(map((x: ContinueGameView) => {
      return x;
    }));
  }
  end():Observable<EndGameView> {
    return this.http.post(this.baseUrl + "/game/end", '')
    .pipe(map((x: EndGameView) => {
      return x;
    }));;
  }
}


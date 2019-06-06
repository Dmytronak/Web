import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GameView } from '../entities/game.view';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getActiveGame() {
    return this.http.get<GameView[]>(this.baseUrl + "/game/getActive")
  }
  play(game: GameView) {
    debugger
    let params = new HttpParams().set("numberOfBots",game.numberOfBots.toString()); 
    return this.http.post(this.baseUrl + "/game/play?"+params,'')
  }
  continue(game: GameView) {
    debugger
    return this.http.post(this.baseUrl + "/game/continue", game)
  }
  end(game: GameView) {
    debugger
    return this.http.post(this.baseUrl + "/game/end", game)
  }
}


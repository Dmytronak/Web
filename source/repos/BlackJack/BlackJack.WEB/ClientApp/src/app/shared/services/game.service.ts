import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlayGameView } from '../entities/game/play-game.view';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getActiveGame() {
    return this.http.get<PlayGameView>(this.baseUrl + "/game/getActive")
  }
  play(x) {
    let params = new HttpParams().set("numberOfBots",x); 
    return this.http.post(this.baseUrl + "/game/play?"+params,'')
  }
  continue() {
    return this.http.post(this.baseUrl + "/game/continue", '')
  }
  end() {
    return this.http.post(this.baseUrl + "/game/end", '')
  }
}


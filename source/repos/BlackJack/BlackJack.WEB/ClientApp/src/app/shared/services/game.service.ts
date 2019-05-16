import { Injectable } from '@angular/core';
import { ConfigService } from '../configs/url.config';
import { Router } from '@angular/router';
import { Player } from '../entities/player.view';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { PlayGame } from '../entities/play-game.view';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = '';
  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.baseUrl = configService.getApiURI();

  }
  getActiveGame() {
    return this.http.get<PlayGame[]>(this.baseUrl + "/game/getActiveGame")
  }
  play(game: PlayGame) {
    debugger
    let params = new HttpParams().set("email",game.email).set("numberOfBots",game.numberOfBots.toString()); 
    return this.http.post(this.baseUrl + "/game/playGame?"+params,'')
  }
  continue(game: PlayGame) {
    debugger
    return this.http.post(this.baseUrl + "/game/continueGame", game)
  }
  end(game: PlayGame) {
    debugger
    return this.http.post(this.baseUrl + "/game/endGame", game)
  }
}


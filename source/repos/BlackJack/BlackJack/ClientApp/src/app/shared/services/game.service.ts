import { Injectable } from '@angular/core';
import { ConfigService } from '../configs/url.config';
import { Router } from '@angular/router';
import { Player } from '../entities/player.view';
import { HttpClient,HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { PlayGame } from '../entities/play-game.view';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = '';
  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.baseUrl = configService.getApiURI();
    
   }
   createNewPlayer(player: Player) {
    return this.http.post(this.baseUrl + "/game/addPlayer", player);
  }
  getExistingPlayers(player:Player) {
   let params = new HttpParams().set("email",player.email); 
   return this.http.get<Player[]>(this.baseUrl + "/game/getExistingPlayers", { params:params })
  }
playGame(game:PlayGame){
  debugger
  return this.http.post(this.baseUrl+"/game/playGame",game)
}
continueGame(game:PlayGame){
  debugger
  return this.http.post(this.baseUrl+"/game/continueGame",game)
}
endGame(game:PlayGame){
  debugger
  return this.http.post(this.baseUrl+"/game/endGame",game)
}



}


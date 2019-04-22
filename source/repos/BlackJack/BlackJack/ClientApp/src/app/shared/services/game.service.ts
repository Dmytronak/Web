import { Injectable } from '@angular/core';
import { ConfigService } from '../configs/url.config';
import { Router } from '@angular/router';
import { Player } from '../entities/player.view';
import { HttpClient,HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = '';
 
  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.baseUrl = configService.getApiURI();
  
   }
   createPlayer(player: Player) {
    return this.http.post(this.baseUrl + "/accounts/register", player);
  }
  
  getPlayers(player:Player) {
   debugger
 
   let params = new HttpParams().set("email",player.email);
      
   return this.http.get<Player[]>(this.baseUrl + "/game/getExistingPlayers", { params:params })
  }




}


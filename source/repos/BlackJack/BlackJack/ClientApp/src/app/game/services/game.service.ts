import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomeDetails } from '../models/home.details.interface'; 
import { ConfigService } from '../../shared/utils/config.service';

import {BaseService} from '../../shared/services/base.service';





@Injectable()

export class GameService extends BaseService {

  baseUrl: string = ''; 
  homeDetails: HomeDetails;

  constructor(private http: HttpClient, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getHomeDetails() {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
     this.http.get(this.baseUrl + "/game/home",{headers})
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
      },
      error => {
        
      });
  }  
}

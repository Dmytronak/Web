import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;

  constructor(private gameService: GameService) { }

  ngOnInit() {

    

  }

}

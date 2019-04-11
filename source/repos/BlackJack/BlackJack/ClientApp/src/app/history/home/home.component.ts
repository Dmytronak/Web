import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {

    

  }

}

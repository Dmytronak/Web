import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header-shared',
  templateUrl: './main-header-shared.component.html',
  styleUrls: ['./main-header-shared.component.scss']
})
export class MainHeaderSharedComponent implements OnInit {
  public navbarCollapsed = true
  constructor() { }

  ngOnInit() {
  }

}

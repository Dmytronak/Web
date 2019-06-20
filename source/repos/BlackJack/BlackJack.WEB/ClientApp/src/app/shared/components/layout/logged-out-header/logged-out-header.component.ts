import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-out-header',
  templateUrl: './logged-out-header.component.html',
  styleUrls: ['./logged-out-header.component.scss']
})
export class LoggedOutHeaderComponent implements OnInit {
  public navbarCollapsed = true
  constructor() { }

  ngOnInit() {
  }

}

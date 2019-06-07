import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeGameComponent implements OnInit {
  email: string = '';
  error: string = '';
  showForm: boolean;
  brandNew: boolean;
  haveActiveGame:boolean= false;
  gameExisting:boolean = false;
  constructor(private gameService: GameService, private router: Router) {
  }
  ngOnInit() {
    this.gameService.getActiveGame()
    .subscribe(x => {
      this.haveActiveGame = true;
    },
      err => {
        this.gameExisting = true;
      });
  }
  showInput() {
    this.showForm = true;
  }
  continueActiveGame() {
    this.router.navigate(["/game/play"]);
  }
  closeInput() {
    this.showForm = false;
    this.brandNew = false;
  }
  play(x) {
      this.gameService.play(x['numberOfBots'])
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/game/play']);
        }
      },
        err => {
          this.error = err;
        });
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./home-page.component.scss'],
  
})
export class HomeGameComponent extends BaseComponent {
  private continueStatus:boolean = false;
  private playStatus:boolean = false;
  private items:Array<string> = ['1', '2', '3', '4','5'];
  private value:any = {};
  constructor(private readonly gameService: GameService, private readonly router: Router,private readonly toastrService: ToastrMessagesService) {
      super();
      this.checkActiveGame();
  }
  ngOnInit() {
  }
  private getNumberOfBots(value):void {
    this.value = value;
  }
  private checkActiveGame():void{
    this.gameService.getActiveGame()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe(x => {
      this.toastrService.info('You have active game! Click continue to play');
        this.continueStatus = true;
    },error=>{ 
      this.playStatus = true;
    });
  }s
  private continueActiveGame() {
    this.router.navigate(["/game/play"]);
  }
  private play():void {
    const numberOfBots:number = this.value.text;
      this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
          this.router.navigate(['/game/play']);
      });
  }
}

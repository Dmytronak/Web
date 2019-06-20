import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeGameComponent extends BaseComponent {
  private playGameForm: FormGroup;
  private continueStatus:boolean = false;
  private playStatus:boolean = false;
  constructor(private readonly gameService: GameService, private readonly router: Router,private readonly toastrService: ToastrMessagesService,
    private readonly formBuilder: FormBuilder) {
      super();
      this.initForms();
  }
  ngOnInit() {
  }
  private initForms():void{
   this.gameService.getActiveGame()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe(x => {
      this.toastrService.info('You have active game! Click continue to play',x.player.name);
        this.continueStatus = true;
    },errorForStatus=>{ 
      this.playStatus = true;
    });
    this.playGameForm = this.formBuilder.group({
      'numberOfBots': ['']
    });
  }
  private continueActiveGame() {
    this.router.navigate(["/game/play"]);
  }
  private play():void {
    const numberOfBots:number = this.playGameForm.value['numberOfBots'];
      this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
          this.router.navigate(['/game/play']);
      });
  }
}

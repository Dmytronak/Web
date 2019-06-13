import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeGameComponent implements OnInit {
  private playGameForm: FormGroup;
  private componetDestroyed: Subject<boolean> = new Subject<boolean>();
  private continueStatus:boolean = false;
  private playStatus:boolean = false;
  constructor(private readonly gameService: GameService, private readonly router: Router,private readonly toastrService: ToastrMessagesService,
    private readonly formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.initForms();
  }
  private initForms():void{
   this.gameService.getActiveGame()
    .pipe(takeUntil(this.componetDestroyed))
    .subscribe(x => {
      this.toastrService.info('You have active game! Click continue to play');
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
    let numberOfBots: number;
    numberOfBots = this.playGameForm.controls['numberOfBots'].value;
      this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/game/play']);
        }
      });
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}

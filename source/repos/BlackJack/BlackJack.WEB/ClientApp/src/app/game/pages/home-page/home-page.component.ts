import { Component, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ToastrMessagesService } from 'src/app/shared/services/toastr-messages.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { SelectModel } from 'src/app/shared/models/select.model';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home-page.component.scss'],

})
export class HomeGameComponent extends BaseComponent {
  public StatusType: typeof StatusType = StatusType;
  public numbersOfBotsSelectItems : Array<string> = Array.from({length: 5}, (v, k) => `${k+1}`);
  public activeStatus: StatusType;
  public numberOfBots:number;
  constructor(private readonly gameService: GameService, private readonly router: Router, private readonly toastrService: ToastrMessagesService) {
    super();
    this.checkActiveGame();
  }
  ngOnInit() {
  }
  private getNumberOfBots(item:SelectModel): void {
    this.numberOfBots = item.id;
  }
  private checkActiveGame(): void {
    this.gameService.getActiveGame()
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
        this.toastrService.info('You have active game! Click continue to play');
        this.activeStatus = StatusType.Continue;
      }, error => {
        this.activeStatus = StatusType.New;
      });
  }
  private continueActiveGame() {
    this.router.navigate(["/game/play"]);
  }
  private play(): void {
    const numberOfBots: number = this.numberOfBots;
    this.gameService.play(numberOfBots)
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(x => {
        this.router.navigate(['/game/play']);
      });
  }
}

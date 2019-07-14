import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CardPlayGameViewItem } from 'src/app/shared/entities/game/play-game.view';
import { FormControl, FormGroup } from '@angular/forms';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  protected componetDestroyed: Subject<boolean> = new Subject<boolean>();
  constructor() {
  }
  ngOnInit(): void {
  }
  public getCardLink(card: CardPlayGameViewItem): string {
    return `assets/cards/${card.rank}_${card.suit}.svg`
  }
  protected convertStatusToString(type: StatusType):string{
    return StatusType[type];
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CardGetPlayGameViewItem } from '../../entities/game/get-play-game.view';

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
  public getCardLink(card:CardGetPlayGameViewItem):string {
    return `assets/cards/${card.rank}_${card.suit}.svg`
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}
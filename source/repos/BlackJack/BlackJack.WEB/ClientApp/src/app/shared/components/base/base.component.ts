import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  protected componetDestroyed: Subject<boolean> = new Subject<boolean>();
  constructor() {
  }

  public ngOnInit(): void {
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}
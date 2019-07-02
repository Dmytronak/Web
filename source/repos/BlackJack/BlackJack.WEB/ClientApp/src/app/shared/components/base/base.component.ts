import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CardPlayGameViewItem } from '../../entities/game/play-game.view';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';
import { StatusType } from '../../enums/status-type.enum.view';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  protected componetDestroyed: Subject<boolean> = new Subject<boolean>();
  @Input() public control: FormControl;
  constructor() {
  }
  ngOnInit(): void {
  }
  public getCardLink(card: CardPlayGameViewItem): string {
    return `assets/cards/${card.rank}_${card.suit}.svg`
  }
  private hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
  private getControlName(): string {
    let controlName = null;
    const parent = this.control['parent'];
    if (parent instanceof FormGroup) {
      for (const name in parent.controls) {
        if (this.control === parent.controls[name]) {
          controlName = name;
        }
      }
    }
    return controlName;
  }
  protected convertStatusToString(type: StatusType):string{
    return StatusType[type];
  }
  private getErrorMessage(): string {
    const errorMessage = this.control.errors.required ? `${this.getControlName()} is required!`:
      this.control.errors.email ?'Email is not valid!':
        this.control.errors.minlength ?`${this.getControlName()} min length not valid!` :
          this.control.errors.maxlength ? `${this.getControlName()} max length not valid!` :
            this.control.errors.pattern ? `${this.getControlName()} is not valid!` :
            this.control.errors.passwordValidation ? `${this.getControlName()} is not valid!` :
            this.control.errors.mustMatch ? `${this.getControlName()} must match!` :
            this.control.errors.ageRange ? "Year range from 1920 to 2019!" :
            this.control.errors.adultRange ? 'You don`t adult enough!':'';
    return errorMessage;
  }
  ngOnDestroy() {
    this.componetDestroyed.next(true);
  }
}
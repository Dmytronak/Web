import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {
  @Input() public control: FormControl;
  constructor() {
  }
  private hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
  public ngOnInit(): void {
  }
  public getControlName(): string {
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
}
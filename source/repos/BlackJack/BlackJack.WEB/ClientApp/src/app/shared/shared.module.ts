import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from './components/layout/main-header/main-header.component';
import { LoggedInHeaderComponent } from './components/layout/logged-in-header/logged-in-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ValidatorComponent } from './validators/validator/validator.component';
import { BaseComponent } from './components/base/base.component';
import { LoggedOutHeaderComponent } from './components/layout/logged-out-header/logged-out-header.component';
@NgModule({
  declarations: [MainHeaderComponent, LoggedInHeaderComponent, ValidatorComponent, BaseComponent, LoggedOutHeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports:[ 
    MainHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ValidatorComponent,
    BaseComponent
  ]
})
export class SharedModule { }

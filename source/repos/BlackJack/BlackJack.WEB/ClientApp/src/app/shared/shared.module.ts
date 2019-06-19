import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from './components/layout/main-header/main-header.component';
import { AuthHeaderComponent } from './components/layout/auth-header/auth-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ValidatorComponent } from './validators/validator/validator.component';
import { BaseComponent } from './components/base/base.component';
@NgModule({
  declarations: [MainHeaderComponent, AuthHeaderComponent, ValidatorComponent, BaseComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports:[ 
    MainHeaderComponent,
    AuthHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ValidatorComponent,
    BaseComponent
  ]
})
export class SharedModule { }

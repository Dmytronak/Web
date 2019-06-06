import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderSharedComponent } from './components/layout/main-header/main-header.component';
import { AuthHeaderSharedComponent } from './components/layout/auth-header/auth-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MainHeaderSharedComponent, AuthHeaderSharedComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[ 
    MainHeaderSharedComponent,
    AuthHeaderSharedComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class SharedModule { }

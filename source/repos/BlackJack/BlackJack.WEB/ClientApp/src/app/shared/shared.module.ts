import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedRoutingModule } from './shared-routing.module';
import { MainHeaderSharedComponent } from './main-header-shared/main-header-shared.component';
import { AuthHeaderSharedComponent } from './auth-header-shared/auth-header-shared.component';
import { myFocus } from './directives/focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [myFocus,MainHeaderSharedComponent, AuthHeaderSharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
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

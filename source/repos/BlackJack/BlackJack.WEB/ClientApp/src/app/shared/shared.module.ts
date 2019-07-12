import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { MainHeaderComponent } from './components/layout/main-header/main-header.component';
import { LoggedInHeaderComponent } from './components/layout/logged-in-header/logged-in-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BaseComponent } from './components/base/base.component';
import { LoggedOutHeaderComponent } from './components/layout/logged-out-header/logged-out-header.component';
import { SelectModule } from 'ng2-select';
const sharedComponents = [BaseComponent, MainHeaderComponent];
@NgModule({
  declarations: [LoggedInHeaderComponent,LoggedOutHeaderComponent,...sharedComponents],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    ...sharedComponents,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }

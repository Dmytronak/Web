import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService }  from '../shared/services/user.service';


import { routing }  from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component'
import { AlertService } from '../shared/services/alert.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,routing,SharedModule,ReactiveFormsModule
  ],
  declarations: [RegistrationFormComponent, LoginFormComponent],
  providers:    [ UserService,AlertService ]
})
export class AccountModule { }

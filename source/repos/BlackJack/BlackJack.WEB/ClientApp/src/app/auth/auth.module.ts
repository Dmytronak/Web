import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { RegistrationAuthComponent } from './registration-auth/registration-auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginAuthComponent, RegistrationAuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { LoginAuthComponent } from 'src/app/auth/pages/login-page/login-page.component';
import { RegistrationAuthComponent } from 'src/app/auth/pages/registration-page/registration-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from 'src/app/auth/auth.component';
@NgModule({
  declarations: [LoginAuthComponent, RegistrationAuthComponent,AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }

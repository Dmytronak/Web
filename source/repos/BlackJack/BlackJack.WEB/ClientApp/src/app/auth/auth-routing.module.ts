import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { RegistrationAuthComponent } from './registration-auth/registration-auth.component';

const routes: Routes = [
  { path: 'login', component: LoginAuthComponent},
  { path: 'register', component: RegistrationAuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

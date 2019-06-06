import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from './login/login.component';
import { RegistrationAuthComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginAuthComponent},
  { path: 'register', component: RegistrationAuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

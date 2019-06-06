import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from './pages/login-page/login-page.component';
import { RegistrationAuthComponent } from './pages/registration-page/registration-page.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [ 
  { path: '', component: AuthComponent, 
  children:[{ 
    path: 'login', component: LoginAuthComponent },
  { path: 'register', component: RegistrationAuthComponent }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

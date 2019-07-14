import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from 'src/app/auth/pages/login-page/login-page.component';
import { RegistrationAuthComponent } from 'src/app/auth/pages/registration-page/registration-page.component';
import { AuthComponent } from 'src/app/auth/auth.component';

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

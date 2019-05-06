import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthUsersGuard } from '../shared/guards/onlyLoggedInUsers.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'register', component: RegistrationFormComponent, canActivate: [AuthUsersGuard] },
  { path: 'login', component: LoginFormComponent, canActivate: [AuthUsersGuard] }

]);
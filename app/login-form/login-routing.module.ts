import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent }   from './login-form.component';

const loginRoutes: Routes = [
  { path: 'login',  component: LoginFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRoutingModule { }

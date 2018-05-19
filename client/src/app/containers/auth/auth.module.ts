import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutes } from './auth.routes';
import { AuthService } from './../../services';
import { Login } from './components/login/login';

const Components = [ Login ];
const Modules = [ FormsModule, ReactiveFormsModule ];
const Routes = RouterModule.forChild(AuthRoutes);

@NgModule({
  imports: [ CommonModule, Modules, Routes ],
  exports: [ Components, Modules ],
  providers: [ AuthService ],
  declarations: [ Components ]
})
export class AuthModule { }

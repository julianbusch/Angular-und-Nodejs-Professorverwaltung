import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingComponent } from './LoginRouting.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Login/Login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  ];
  @NgModule({
  imports: [RouterModule.forChild(routes)]
  })
  export class LogInOutRoutingModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInOutComponent } from './LogInOut.component';
import { LoginOutButtonComponent } from './LogInOutButton/LogInOutButton.component';
import { LogInOutRoutingModule } from './LoginRouting/LoginRouting.module';
import { LoginComponent } from './Login/Login.component';
import { LoginRoutingComponent } from './LoginRouting/LoginRouting.component';


@NgModule({
  // steht nicht auf Folie: LoginComponent fehlt hier noch, sonst funktionieren die bindings von LoginComponent nicht
  declarations: [LoginOutButtonComponent, LoginComponent, LoginRoutingComponent],
  imports: [CommonModule, FormsModule],
  exports: [LogInOutRoutingModule, LoginOutButtonComponent]
  })
  export class LogInOutModule { }

/* @NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogInOutComponent]
})
export class LogInOutModule { }
 */

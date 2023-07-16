import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfessorenverwaltungModule } from './Professorenverwaltung/Professorenverwaltung.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './AppRouting/AppRouting.module';
import { SeiteNichtGefundenComponent } from './SeiteNichtGefunden/SeiteNichtGefunden.component';
import { FakultätsverwaltungModule } from './Fakultätsverwaltung/Fakultätsverwaltung.module';

@NgModule({
  declarations: [
    AppComponent, SeiteNichtGefundenComponent
  ],
  imports: [
    BrowserModule, ProfessorenverwaltungModule, FormsModule, AppRoutingModule, RouterModule, FakultätsverwaltungModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

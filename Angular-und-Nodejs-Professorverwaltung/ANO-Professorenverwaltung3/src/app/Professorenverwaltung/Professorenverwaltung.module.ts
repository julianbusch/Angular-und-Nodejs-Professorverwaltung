import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorenverwaltungComponent } from './Professorenverwaltung.component';
import { ProfessorenListeComponent } from './ProfessorenListe/ProfessorenListe.component';
import { ProfessorAendernComponent } from './ProfessorAendern/ProfessorAendern.component';
import { ProfessorDetailsComponent } from './ProfessorDetails/ProfessorDetails.component';
import { ProfessorErstellenComponent } from './ProfessorErstellen/ProfessorErstellen.component';
import { ProfessorSuchenComponent } from './ProfessorSuchen/ProfessorSuchen.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { ProfessorenverwaltungRoutingModule } from '../ProfessorenverwaltungRouting/ProfessorenverwaltungRouting.module';
import { LogInOutModule } from '../LogInOut/LogInOut.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, LogInOutModule, HttpClientModule
  ],

  exports:[
    ProfessorenListeComponent, ProfessorenverwaltungRoutingModule
  ],
  declarations: [ProfessorenverwaltungComponent, ProfessorenListeComponent,
    ProfessorAendernComponent, ProfessorDetailsComponent, ProfessorErstellenComponent, ProfessorSuchenComponent]
})
export class ProfessorenverwaltungModule { }

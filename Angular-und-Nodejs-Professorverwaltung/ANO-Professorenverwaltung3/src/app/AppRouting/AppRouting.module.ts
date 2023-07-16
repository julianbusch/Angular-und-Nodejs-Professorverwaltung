import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingComponent } from './AppRouting.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorAendernComponent } from '../Professorenverwaltung/ProfessorAendern/ProfessorAendern.component';
import { ProfessorErstellenComponent } from '../Professorenverwaltung/ProfessorErstellen/ProfessorErstellen.component';
import { ProfessorenListeComponent } from '../Professorenverwaltung/ProfessorenListe/ProfessorenListe.component';
import { SeiteNichtGefundenComponent } from '../SeiteNichtGefunden/SeiteNichtGefunden.component';



const routes: Routes = [
  {path: '', redirectTo: 'professor', pathMatch: 'full'},
  {path: '**', component: SeiteNichtGefundenComponent}
  ];
/* const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ProfessorenListeComponent},
  {path: 'create', component: ProfessorErstellenComponent},
  {path: 'edit/:kuerzel', component: ProfessorAendernComponent}
  ]; */
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [AppRoutingComponent]
})
export class AppRoutingModule { }

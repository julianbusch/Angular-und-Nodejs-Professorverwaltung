import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorenverwaltungRoutingComponent } from './ProfessorenverwaltungRouting.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorAendernComponent } from '../Professorenverwaltung/ProfessorAendern/ProfessorAendern.component';
import { ProfessorErstellenComponent } from '../Professorenverwaltung/ProfessorErstellen/ProfessorErstellen.component';
import { ProfessorenListeComponent } from '../Professorenverwaltung/ProfessorenListe/ProfessorenListe.component';
import { ProfessorenverwaltungComponent } from '../Professorenverwaltung/Professorenverwaltung.component';
import { AuthentifizierungGuard } from '../LogInOut/authentifizierung.guard';
import { AenderungenSpeichernGuard } from '../AenderungenSpeichern/aenderungen-speichern.guard';
import { ProfessorSuchenComponent } from '../Professorenverwaltung/ProfessorSuchen/ProfessorSuchen.component';



const routes: Routes = [
  {
    path: 'professor',
    component: ProfessorenverwaltungComponent,
    canActivate: [AuthentifizierungGuard],
    canActivateChild: [AuthentifizierungGuard],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProfessorenListeComponent },
      {
        path: 'create', component: ProfessorErstellenComponent,
        canDeactivate: [AenderungenSpeichernGuard]
      },

      {
        path: 'edit/:kuerzel', component: ProfessorAendernComponent,
        canDeactivate: [AenderungenSpeichernGuard]
      },
      {path: 'find', component: ProfessorSuchenComponent}

    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ProfessorenverwaltungRoutingComponent]
})
export class ProfessorenverwaltungRoutingModule { }

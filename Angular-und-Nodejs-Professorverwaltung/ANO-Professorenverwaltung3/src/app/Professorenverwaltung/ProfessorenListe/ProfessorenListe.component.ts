import { Component, OnInit } from '@angular/core';
import { Professor } from '../Professor';
import { ProfessorService } from '../Professor.service';

@Component({
  selector: 'app-ProfessorenListe',
  templateUrl: './ProfessorenListe.component.html',
  styleUrls: ['./ProfessorenListe.component.css']
})

export class ProfessorenListeComponent implements OnInit {
  professoren: Professor[] | undefined; // Model
  selektierterProfessor: Professor | undefined;
  constructor(private professorService: ProfessorService) { }
  ngOnInit() {
    this.getProfessoren();
  }

  getProfessoren(): void {
    this.professorService.getProfessoren().subscribe(
      (profs: Professor[]) => this.professoren = profs);
  }
  selektiereProfessor(prof: Professor): void {
    this.selektierterProfessor = prof;
  }
  delete(professor: Professor): void {
    if (confirm(`Professor ${professor.vorname} ${professor.nachname} wirklich löschen?`)) {
      if (this.selektierterProfessor &&
        professor.kuerzel === this.selektierterProfessor.kuerzel) {
        this.selektierterProfessor = undefined;
      }
      this.professorService.delete(professor).subscribe(
        (prof: Professor) => this.getProfessoren());
    }
  }
}


// alt, hardcoded ohne rest api
/* export class ProfessorenListeComponent implements OnInit {
  professoren!: Professor[]; // Model
  selektierterProfessor: Professor|undefined;
  constructor(private professorService: ProfessorService) { }
  ngOnInit() { this.getProfessoren(); }
  getProfessoren(): void {
  this.professoren = this.professorService.getProfessoren();
  }
  selektiereProfessor(prof: Professor): void { this.selektierterProfessor = prof; }

  delete(professor: Professor): void {
    if (this.selektierterProfessor &&
    professor.kuerzel === this.selektierterProfessor.kuerzel) {
    this.selektierterProfessor = undefined;
    }
    this.professorService.delete(professor);
    this.getProfessoren();
    }

  }
 */

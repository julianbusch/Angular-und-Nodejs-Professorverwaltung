import { Component, OnInit } from '@angular/core';
import { Professor } from '../Professor';
import { ProfessorService } from '../Professor.service';

@Component({
  selector: 'app-ProfessorSuchen',
  templateUrl: './ProfessorSuchen.component.html',
  styleUrls: ['./ProfessorSuchen.component.css']
})
export class ProfessorSuchenComponent implements OnInit {
  professor!: Professor; // Suchkriterium
  professoren!: Professor[]; // Suchergebnis
  constructor(private professorService: ProfessorService) { }
  ngOnInit() {
    this.professor = new Professor();
  }
  suchen() {
    this.professorService.getProfessoren(this.professor).subscribe(
      professoren => this.professoren = professoren);
  }
  delete(professor: Professor): void {
    this.professorService.delete(professor).subscribe(prof => this.suchen());
  }
}

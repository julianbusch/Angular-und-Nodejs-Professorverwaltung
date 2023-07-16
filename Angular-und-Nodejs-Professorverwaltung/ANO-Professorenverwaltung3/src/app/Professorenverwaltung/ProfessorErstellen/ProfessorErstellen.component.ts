import { Component, OnInit } from '@angular/core';
import { Professor } from '../Professor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../Professor.service';
import { AenderungenSpeichernInterface } from 'src/app/AenderungenSpeichern/AenderungenSpeichern';

@Component({
  selector: 'app-ProfessorErstellen',
  templateUrl: './ProfessorErstellen.component.html',
  styleUrls: ['./ProfessorErstellen.component.css']
})



export class ProfessorErstellenComponent implements
  OnInit, AenderungenSpeichernInterface {
  professor!: Professor;
  aenderungenGespeichert: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
    private professorService: ProfessorService) {
  }

  ngOnInit() {
    this.professor = new Professor();
  }
  save(professor: Professor): void {
    this.professorService.create(this.professor).subscribe(
      (prof: Professor) => {
        this.aenderungenGespeichert = true;
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    );
  }
  hatUngespeicherteAenderungen(): boolean {
    return !this.aenderungenGespeichert;
  }
}

// alt, ohne restapi
/* export class ProfessorErstellenComponent implements OnInit, AenderungenSpeichernInterface {

  professor!: Professor;
  aenderungenGespeichert: boolean = false;



  constructor(private router: Router, private professorService:
    ProfessorService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.professor = new Professor();
  }

  save(professor: Professor): void {
    this.professorService.create(professor);
    this.router.navigate(['../'], { relativeTo: this.route });


  }

  hatUngespeicherteAenderungen(): boolean {
    return !this.aenderungenGespeichert;
  }




}

 */
/* this.router.navigateByUrl('list'); */

import { Component, OnInit } from '@angular/core';
import { Professor, cloneProfessor, equalsProfessor } from '../Professor';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProfessorService } from '../Professor.service';
import { AenderungenSpeichernInterface } from 'src/app/AenderungenSpeichern/AenderungenSpeichern';

@Component({
  selector: 'app-ProfessorAendern',
  templateUrl: './ProfessorAendern.component.html',
  styleUrls: ['./ProfessorAendern.component.css']
})

export class ProfessorAendernComponent implements
  OnInit, AenderungenSpeichernInterface {
  professor: Professor | undefined;
  oriProfessor: Professor | undefined;
  aenderungenGespeichert: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
    private professorService: ProfessorService) { }

  ngOnInit() {
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string | null = routeSnapshot.params['kuerzel'];
    if (kuerzel) {
      this.professorService.getProfessor(kuerzel).subscribe(
        (professor: Professor) => {
          if (professor) {
            this.oriProfessor = professor;
            this.professor = cloneProfessor(this.oriProfessor);
          } else {
            this.router.navigateByUrl('/list');
          }
        }
      );
    } else {
      this.router.navigateByUrl('/list');
    }
  }

  update(professor: Professor): void {
    this.professorService.update(professor).subscribe(
      (prof: Professor) => {
        this.aenderungenGespeichert = true;
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    );
  }
  hatUngespeicherteAenderungen(): boolean {
    if (this.professor && this.oriProfessor) {
      return !this.aenderungenGespeichert &&
        !equalsProfessor(this.professor, this.oriProfessor);
    } else {
      return false;
    }
  }
}






// alt, ohne rest api
/* export class ProfessorAendernComponent implements OnInit,
  AenderungenSpeichernInterface {
  professor: Professor | undefined;
  oriProfessor: Professor | undefined;
  aenderungenGespeichert: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) { }

  ngOnInit() {
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string | null = routeSnapshot.params['kuerzel'];
    this.oriProfessor = kuerzel ? this.professorService.getProfessor(kuerzel) : undefined;
    if (this.oriProfessor) {
      this.professor = cloneProfessor(this.oriProfessor); // Um Änderungen feststellen zu können
    } else {
      this.router.navigateByUrl('/list');
    }
  }
  update(professor: Professor): void {
    this.professorService.update(professor);
    this.aenderungenGespeichert = true;
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  hatUngespeicherteAenderungen(): boolean {
    if (this.professor && this.oriProfessor) {
      return !this.aenderungenGespeichert &&
        !equalsProfessor(this.professor, this.oriProfessor);
    } else {
      return false;
    }
  }
} */



/* export class ProfessorAendernComponent implements OnInit {

  professor: Professor | undefined;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private professorService: ProfessorService) { }

  ngOnInit() {

    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const kuerzel: string | null = routeSnapshot.params['kuerzel'];
    if (kuerzel) {
      this.professor = this.professorService.getProfessor(kuerzel);
    } else {
      this.router.navigate(['../../'], {relativeTo: this.route});
    }
  }
  update(professor: Professor): void {
    this.professorService.update(professor);
    this.router.navigate(['../../'], {relativeTo: this.route});

  }
} */
/* this.router.navigateByUrl('/list'); */

import { Injectable } from '@angular/core';
import { Professor } from './Professor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpHeaders: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json', // Typ der übermittelten Daten
  'Accept': 'application/json', // Gewünschter Rückgabetyp
  'Cache-Control': 'no-cache' // Cache deaktivieren
});
const httpOptions = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private restServiceUrl = 'http://localhost:8080/professor';
  constructor(private http: HttpClient) { }
  create(professor: Professor): Observable<Professor> {
    const url = `${this.restServiceUrl}`;
    return this.http.post<Professor>(url, professor, httpOptions);
  }



  // neu mit suchfunktion
  getProfessoren(searchCriteria?: Professor): Observable<Professor[]> {
    if (searchCriteria) {
      return this.http.get<Professor[]>(this.restServiceUrl,
        { headers: httpHeaders, params: searchCriteria as any });
    } else {
      return this.http.get<Professor[]>(this.restServiceUrl, httpOptions);
    }
  }


  // alt, ohne suche
  /* getProfessoren(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.restServiceUrl, httpOptions);
  } */


  getProfessor(id: string): Observable<Professor> {
    const url = `${this.restServiceUrl}/${id}`;
    return this.http.get<Professor>(url, httpOptions);
  }
  update(professor: Professor): Observable<Professor> {
    const url = `${this.restServiceUrl}/${professor.kuerzel}`;
    return this.http.put<Professor>(url, professor, httpOptions);
  }
  delete(professorToDelete: Professor): Observable<Professor> {
    const url = `${this.restServiceUrl}/${professorToDelete.kuerzel}`;
    return this.http.delete<Professor>(url);
  }
}



// alles alt, ohne restapi, hardcoded mit array
/* @Injectable({
  providedIn: 'root'
  })
  export class ProfessorService {
  profs: Professor[] = [
  {vorname: 'Thomas', nachname: 'Specht', kuerzel: 'SPE'},
  {vorname: 'Michael', nachname: 'Groeschel', kuerzel: 'GRM'}
  ];
  constructor() { }


  getProfessoren(): Professor[] {
  return this.profs;
  }

  getProfessor(kuerzel: string): Professor | undefined {
    for (const prof of this.profs) {
    if (prof.kuerzel === kuerzel) {
    return prof;
    }
    }
    return undefined;
    }

    create(professor: Professor): Professor {
      this.profs.push(professor);
      return professor;
      }


      update(professor: Professor): Professor {
        for (const prof of this.profs) {
        if (prof.kuerzel === professor.kuerzel) {
        prof.vorname = professor.vorname;
        prof.nachname = professor.nachname;
        prof.kuerzel = professor.kuerzel;
        }
        }
        return professor;
        }


        delete(professorToDelete: Professor): void {
          this.profs = this.profs.filter(
          (element: Professor) => element.kuerzel !== professorToDelete.kuerzel);
          }
  }
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loggedIn: boolean = false;
  private _loggedInAs: string | undefined = undefined;
  redirectUrl: string = '/'; // Default-Pfad, falls Login-Dialog direkt aufgerufen
  constructor() { }
  /*  constructor(private benutzerService: BenutzerService) { } */
  // Anmerkung: BenutzerService + Benutzerverwaltung nicht auf Folien
  get isLoggedIn(): boolean {
    return this._loggedIn;
  }
  get loggedInAs(): string | undefined {
    return this._loggedInAs;
  }
  login(loginAccount: string, passwort: string): boolean {
    /*  this._loggedIn = this.benutzerService.pruefePasswort(loginAccount, passwort); */
    this._loggedIn = loginAccount === 'specht' && passwort === 'spe';
    if (this._loggedIn) {
      this._loggedInAs = loginAccount;
    } else {
      this._loggedInAs = undefined;
    }
    return this._loggedIn;
  }
  logout(): void {
    this._loggedIn = false;
    this._loggedInAs = undefined;
  }
}

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { aenderungenSpeichernGuard } from './aenderungen-speichern.guard';

describe('aenderungenSpeichernGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aenderungenSpeichernGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentifizierungGuard } from './authentifizierung.guard';

describe('authentifizierungGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentifizierungGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

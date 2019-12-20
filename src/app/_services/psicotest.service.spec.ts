import { TestBed } from '@angular/core/testing';

import { PsicotestService } from './psicotest.service';

describe('PsicotestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PsicotestService = TestBed.get(PsicotestService);
    expect(service).toBeTruthy();
  });
});

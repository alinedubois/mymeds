import { TestBed } from '@angular/core/testing';

import { ReferentielMedicamentsService } from './referentiel-medicaments.service';

describe('ReferentielMedicamentsService', () => {
  let service: ReferentielMedicamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferentielMedicamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

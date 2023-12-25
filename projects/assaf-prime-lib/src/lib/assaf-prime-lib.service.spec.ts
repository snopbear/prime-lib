import { TestBed } from '@angular/core/testing';

import { AssafPrimeLibService } from './assaf-prime-lib.service';

describe('AssafPrimeLibService', () => {
  let service: AssafPrimeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssafPrimeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

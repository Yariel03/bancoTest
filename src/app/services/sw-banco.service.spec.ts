import { TestBed } from '@angular/core/testing';

import { SwBancoService } from './sw-banco.service';

describe('SwBancoService', () => {
  let service: SwBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

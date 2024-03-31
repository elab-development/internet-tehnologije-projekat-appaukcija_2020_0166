import { TestBed } from '@angular/core/testing';

import { SortiranjeService } from './sortiranje.service';

describe('SortiranjeService', () => {
  let service: SortiranjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortiranjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetBidsService } from './get-bids.service';

describe('GetBidsService', () => {
  let service: GetBidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

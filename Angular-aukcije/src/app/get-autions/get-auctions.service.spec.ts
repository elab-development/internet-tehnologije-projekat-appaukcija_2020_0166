import { TestBed } from '@angular/core/testing';

import { GetAuctionsService } from './get-auctions.service';

describe('GetAuctionsService', () => {
  let service: GetAuctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAuctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddAuctionService } from './add-auction.service';

describe('AddAuctionService', () => {
  let service: AddAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

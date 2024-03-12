import { TestBed } from '@angular/core/testing';

import { DeleteAuctionService } from './delete-auction.service';

describe('DeleteAuctionService', () => {
  let service: DeleteAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

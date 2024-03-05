import { TestBed } from '@angular/core/testing';

import { CreateBidService } from './create-bid.service';

describe('CreateBidService', () => {
  let service: CreateBidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

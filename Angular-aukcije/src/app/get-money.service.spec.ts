import { TestBed } from '@angular/core/testing';

import { GetMoneyService } from './get-money.service';

describe('GetMoneyService', () => {
  let service: GetMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

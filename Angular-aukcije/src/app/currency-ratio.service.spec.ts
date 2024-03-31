import { TestBed } from '@angular/core/testing';

import { CurrencyRatioService } from './currency-ratio.service';

describe('CurrencyRatioService', () => {
  let service: CurrencyRatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyRatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

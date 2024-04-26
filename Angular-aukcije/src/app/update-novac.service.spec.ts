import { TestBed } from '@angular/core/testing';

import { UpdateNovacService } from './update-novac.service';

describe('UpdateNovacService', () => {
  let service: UpdateNovacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateNovacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

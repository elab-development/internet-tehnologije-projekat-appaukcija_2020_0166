import { TestBed } from '@angular/core/testing';

import { UpdateVremeZavrsetkaService } from './update-vreme-zavrsetka.service';

describe('UpdateVremeZavrsetkaService', () => {
  let service: UpdateVremeZavrsetkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateVremeZavrsetkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

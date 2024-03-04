import { TestBed } from '@angular/core/testing';

import { UpdateTrenutnaCenaService } from './update-trenutna-cena.service';

describe('UpdateTrenutnaCenaService', () => {
  let service: UpdateTrenutnaCenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTrenutnaCenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

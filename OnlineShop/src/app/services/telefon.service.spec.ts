import { TestBed } from '@angular/core/testing';

import { TelefonService } from './telefon.service';

describe('TelefonService', () => {
  let service: TelefonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PcCartService } from './pc-cart.service';

describe('PcCartService', () => {
  let service: PcCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

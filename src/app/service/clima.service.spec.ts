import { TestBed } from '@angular/core/testing';

import {  ClimaService } from './clima.service';

describe('ServiceService', () => {
  let service: ClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathService = TestBed.get(MathService);
    expect(service).toBeTruthy();
  });

  it('should compute exchange rate', () => {
    const service: MathService = TestBed.get(MathService);
    expect(service.computeExchangeRate(1,2)).toBe(0.5);
  });
});

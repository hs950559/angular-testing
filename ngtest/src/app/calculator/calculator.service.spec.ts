import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });

    calculatorService = TestBed.get(CalculatorService);
  });

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const result = calculatorService.add(2, 3);
    // expect(result).toBe(54, 'error in addition');
    expect(result).toBe(5);
  });
});
